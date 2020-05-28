const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:appartment3@ds253537.mlab.com:53537/heroku_3sqqpzd3"
);
const householdSeed = {
    name: "Project3"    
}

const choreSeed = [
  {
    name: "Wash Dishes",
    assignedTo: ["Tony"]
  },
  {
    name: "Mow Lawn",
    assignedTo: ["Carolina", "Lety"]
  },
  {
    name: "Grocery Shopping",
    assignedTo: ["Monica", "Lety"]
  }
]

const transactionSeed = [
  {
    name: "rent",
    amount: 1000,
    isExpense: true
  },
  {
    name: "cable/internet",
    amount: 200,
    isExpense: true
  },
  {
    name: "rent",
    amount: 250,
    isExpense: false,
    paidBy: "Tony"
  },
  {
    name: "rent",
    amount: 250,
    isExpense: false,
    paidBy: "Lety"
  },
  {
    name: "cable/internet",
    amount: 50,
    isExpense: false,
    paidBy: "Lety"
  },
  {
    name: "cable/internet",
    amount: 50,
    isExpense: false,
    paidBy: "Tony"
  },
  {
    name: "cable/internet",
    amount: 50,
    isExpense: false,
    paidBy: "Monica"
  },
  {
    name: "cable/internet",
    amount: 50,
    isExpense: false,
    paidBy: "Carolina"
  }
  
]

const userSeed = [
  {
    displayName: "Monica",
    username: "user_m1",
    password: "Monica",
    email: "Monica@gmail.com"
    
  },
  {
    displayName: "Lety",
    username: "lety123",
    password: "Lety",
    email: "Lety@gmail.com"
    
  },
  {
    displayName: "Carolina",
    username: "lady_C",
    password: "Carolina",
    email: "Carolina@gmail.com"
    
  },
  {
    displayName: "Tony",
    username: "user_123",
    password: "Anthony",
    email: "Anthony@gmail.com"    
  },
];


const emptyDB = async()=>{
  let u = await db.User.deleteMany({});
  console.log(u);
  let h = await db.Household.deleteMany({});
  console.log(h);
  let t = await db.Transaction.deleteMany({});
  console.log(t);
  let c = await db.Chores.deleteMany({});
  console.log(c);
  
  return (u.ok + h.ok + t.ok + c.ok) === 4 
};

const addSeedData = async() =>{
  const clearAll = await emptyDB();
  
  if (!clearAll){
    console.log("Error clearing DB");
    process.exit(1);
  }

  //create household
  let newHouseHold = await db.Household.create(householdSeed);

  //add household_id to users
  let newSeed = userSeed.map(user => {
    user.household_id = newHouseHold._id;
    return user;
  });

  //add updated users to db
  let newUsers = await db.User.insertMany(newSeed);

  //create chore array with appropriate user ids
  const chores = choreSeed.map(({name, assignedTo}) => {
    users = assignedTo.map(u => {
     return newUsers.filter(({displayName})=> u === displayName).map(({_id})=>_id)[0]
    });

    return {
      name,
      users
    }
  });
  
  const choreData = await db.Chores.insertMany(chores);

  //create transaction array with appropriate user ids
  const txList = transactionSeed.map(({name, amount, isExpense, paidBy})=>{
    const thisUser = newUsers.filter(u => u.displayName === paidBy)[0];
    return {
      name, 
      amount, 
      user: (thisUser) ? thisUser._id : null,
      isExpense
    }
  })

  //insert transactions
  const txData = await db.Transaction.insertMany(txList);

  const userIDs = newUsers.map(u => u._id);
  const choreIDs = choreData.map(c => c._id);
  const txIDs = txData.map(t => t.id);


  //update household with chores transactions & members
  let updateHouse = await db.Household.findOneAndUpdate({_id : newHouseHold._id}, 
      { 
        $push: { 
          members: userIDs, 
          chores: choreIDs,
          transactions: txIDs 
        } 
      }, { new: true }
    );
  
    process.exit(0);
}

addSeedData();
