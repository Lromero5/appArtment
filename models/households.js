const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  members: [{
    type: mongoose.Schema.ObjectId, ref: "User"
  }], 
  chores: [{
    type:mongoose.Schema.ObjectId, ref:"Chores"
  }], 
  //this is good
  transactions: [{
    type:mongoose.Schema.ObjectId, ref:"Transaction"

  }]
   
  
});
// householdSchema.methods.addTransaction=function({newTran}) {
//   this.transactions.push({newTran})
//   return this.transactions;
  
// }

const Household = mongoose.model("Household", householdSchema);

module.exports = Household;