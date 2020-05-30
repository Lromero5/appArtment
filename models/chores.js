const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const choresSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  users: [{
    type: mongoose.Schema.ObjectId, ref: "User"
  }]
  
});
const Chores = mongoose.model("Chores", choresSchema);
module.exports = Chores;