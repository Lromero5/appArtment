const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  amount: {
    type: Number,
    required: true
  },
  isExpense: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.ObjectId, ref: "User"
  }
});
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
// app.post("/submit:id",({params, body}, res) =>{
//   id=params.id
//  db.Transaction.create(body)
//  .then(({_id}) => db.Households
//  .findOneAndUpdate9({_id:id}, {$push: {transactions: _id}},{new:true}))
//  })