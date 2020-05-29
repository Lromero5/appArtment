const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

const Chore = mongoose.model("Chore", choresSchema);

module.exports = Chore;
