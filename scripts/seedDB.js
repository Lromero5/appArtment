const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:appartment3@ds253537.mlab.com:53537/heroku_3sqqpzd3"
);

const householdSeed = [
  {
      name: "The Best House Ever",
      chores: [
          {
              task: "Wash Dishes",
              assignedTo: ["antonio"]
          },
          {
              task: "Mow Lawn",
              assignedTo: ["Carolina", "lety1"]
          },
          {
              task: "Grocery Shopping",
              assignedTo: ["monik_0491", "lety1"]
          }
      ],
      members: [
          {
              displayName: "Lety",
              username : "lety1",
              password : "$2a$05$zQlEvw3Q2DQ2rq6cxv/ub.2SbdYZ8qa7u7eF4hBQOzW2/TXwhFmIe",
              email : "lety1@gmail.com",
          },
          {
              displayName: "Monica",
              username : "monik_0491",
              password : "$2a$05$.Ee5Cczr62Rg1jRsnKj2R.xIJu3BkKsvjhRR0G8RcSlkoan5UMNcy",
              email : "monik_0491@hotmail.com",
          },
          {
              displayName: "Tony",
              username : "antonio",
              password : "$2a$05$sDRHAMev6FURoePNDVJg6uzWeyX1Trq4D4BynuuIIKA/yH/YTQ1sy",
              email : "antonio@gmail.com",
          },
          {
              displayName: "Carolina",
              username : "Carolina",
              password : "$2a$05$s4Jd2//xH3HkHF18jenNkOU/vJAHqujQO8H0P7rwbVuAbmXYlW3ve",
              email : "szymancarolina@gmail.com",
          },
      ],
      transactions:  [
          {
              name: "rent",
              amount: -1000,
              isExpense: true
          },
          {
              name: "cable/internet",
              amount: -200,
              isExpense: true
          },
          {
              name: "rent",
              amount: 250,
              isExpense: false,
              paidBy: "monik_0491"
          },
          {
              name: "rent",
              amount: 250,
              isExpense: false,
              paidBy: "lety1"
          },
          {
              name: "cable/internet",
              amount: 50,
              isExpense: false,
              paidBy: "lety1"
          },
          {
              name: "cable/internet",
              amount: 50,
              isExpense: false,
              paidBy: "antonio"
          },
          {
              name: "cable/internet",
              amount: 50,
              isExpense: false,
              paidBy: "monik_0491"
          },
          {
              name: "cable/internet",
              amount: 50,
              isExpense: false,
              paidBy: "Carolina"
          }
      ]
  },
  {
      name: "House Party",
      chores:[],
      members: [
          {
              displayName: "Lety",
              username : "lety",
              password : "$2a$05$nnm/Bha0p7xpl4Mv0GvMKOXP7QBo1tZZWNAXoHq2L3bR9kJ1zLO/W",
              email : "lety@gmail.com",
          },
          {
              displayName: "Monica",
              username : "monik",
              password : "$2a$05$FyntRBG4V7EwqGm01O3nne6YV63LEEq6hyv2MxGCR2OaYK.NgSH1S",
              email : "monik@gmail.com",
          },
      ],
      transactions:[]
  },
  {
      name: "Green House",
      chores: [],
      members: [
          {
              displayName: "",
              username : "user1",
              password : "$2a$05$/Z89UgZuCnV4OaoJEsnfN.zQk5ZxrhNZlQdCgKYoe10w.RQ0nnGfC",
              email : "user1@gmail.com",
          },
          {
              displayName: "",
              username : "y_e_e_t",
              password : "$2a$05$ZBkqsmZuEpG/CwKTgVfRAOuttbDpk2xojdfBD3pMLT9/SCjA1CHd.",
              email : "aseasyascode@gmail.com",
          }
      ],
      transactions: [],
  },
  {
      name: "Red House",
      chores: [],
      members: [
          {
              displayName: "",
              username : "user03",
              password : "$2a$05$voRSVNlIvgBVceEGLBVizu6KIZdubflondwqdU5mOpNdqrB589QLW",
              email : "user03@email.com",
          },
          {
              displayName: "Monica",
              username : "monicarod",
              password : "$2a$05$mgn7z9YlLFsPgp4ItAnm3uzO2oIOi3X1.AOQxE/QuFlGMdk0R32h2",
              email : "monicarod@gmail.com",
          }
      ],
      transactions: [],
  },
  {
      name: "Blue House",
      chores: [],
      members: [
          {
              displayName : "Dominique",
              username : "dmg91",
              password : "$2a$05$dIMq/Bhv5/SZq0UQCcWisO07wjJAcdFw4CFWXC2ZpWXy7XaRgVzvC",
              email : "dominique.l.meeks@gmail.com",
          }
      ],
      transactions: [],
  },
]

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

  householdSeed.map(async({name, chores, members, transactions}) => {
    //create household
    let newHouseHold = await db.Household.create({name});

    //add household_id to users
    const memberList = members.map(user => {
      user.household_id = newHouseHold._id;
      return user;
    });

    //add updated users to db
    members = await db.User.insertMany(memberList);

     //create chore array with appropriate user ids
    const choreList = chores.map(({task, assignedTo}) => {
      users = assignedTo.map(u => {
        return members.filter(({username})=> u === username).map(({_id})=>_id)[0]
      });
      return {
        task,
        users
      }
    });

    //insert chores
    const choresData = await db.Chores.insertMany(choreList);

    //create transaction array with appropriate user ids
    const txList = transactions.map(({name, amount, isExpense, paidBy})=>{
      const thisUser = members.filter(u => u.username === paidBy)[0];
      return {
        name, 
        amount, 
        user: (thisUser) ? thisUser._id : null,
        isExpense
      }
    })
  
    //insert transactions
    const txData = await db.Transaction.insertMany(txList);



    //update household with chores transactions & members
    await db.Household.findOneAndUpdate({_id : newHouseHold._id}, 
      { 
        $push: { 
          members: members.map(m => m.id), 
          chores: choresData.map(c => c.id),
          transactions: txData.map(t => t.id)
        } 
      }, { new: true }
    );

    console.log({
      name,
      chores,
      members,
      transactions
    });

  })

  
    // process.exit(0);
}

addSeedData();
