const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
 
  users: [{
    type: mongoose.Schema.ObjectId, ref: "User"
  }],
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  
});

const Chores = mongoose.model("Chores", choresSchema);

module.exports = Chores;
