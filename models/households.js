const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  members: [{
    type: mongoose.Schema.ObjectId, ref: "User"
  }], //this should hold the user_id's from the users collection
  chores: [{
    type:mongoose.Schema.ObjectId, ref:"Chores"
  }], //will be input by the users
  
});

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;