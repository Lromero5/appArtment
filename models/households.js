const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.ObjectId, ref: "User"
  }], 
  chores: [{
    type:mongoose.Schema.ObjectId, ref:"Chores"
  }], 
  
  transactions: [{
    type:mongoose.Schema.ObjectId, ref:"Transaction"

  }]
   
  
});


const Household = mongoose.model("Household", householdSchema);

module.exports = Household;
