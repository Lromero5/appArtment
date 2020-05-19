const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  }
 
  
});

const Chores = mongoose.model("Chores", choresSchema);

module.exports = Chores;