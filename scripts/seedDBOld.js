const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:appartment3@ds253537.mlab.com:53537/heroku_3sqqpzd3"
);

const userSeed = [
  {
    username: "Monica00",
    password: "Monica00",
    email: "Monica00@gmail.com"
    
  },
  {
    username: "Lety00",
    password: "Lety00",
    email: "Lety00@gmail.com"
    
  },
  {
    username: "Carolina00",
    password: "Carolina00",
    email: "Carolina00@gmail.com"
    
  },
  {
    username: "Anthony00",
    password: "Anthony00",
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
            console.log(newUser)
            db.Household.findOneAndUpdate({_id: newUser.household_id}, { $push: { members: newUser._id } }, { new: true })
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
