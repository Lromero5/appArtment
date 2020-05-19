const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/appartment"
);

const userSeed = [
  {
    username: "Monica",
    password: "Monica",
    email: "Monica@gmail.com"
    
  },
  {
    username: "Lety",
    password: "Lety",
    email: "Lety@gmail.com"
    
  },
  {
    username: "Carolina",
    password: "Carolina",
    email: "Carolina@gmail.com"
    
  },
  {
    username: "Anthony",
    password: "Anthony",
    email: "Anthony@gmail.com"    
  },
 ];


 const householdSeed = 
     {
        name: "Project3",
          
    }

    db.User.remove({}).then(() => {
    db.Household
    .remove({})
    .then(() => {
      //create household
      db.Household
      .create(householdSeed)
      .then(({_id}) => {
        //update users withid of created household
        console.log(_id);
        let newSeed = userSeed.map(user => {
          user.household_id = _id
          return user
        })
        db.User.collection.insert(newSeed).then(data => {
          console.log(data);
          data.ops.forEach(newUser => {
            db.User.findOneAndUpdate({_id}, { $push: { members: newUser._id } }, { new: true })
          })
          // process.exit(0);
        } )
      })
    }).catch(err => {
      console.error(err);
      process.exit(1);
    });
  });
  

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
