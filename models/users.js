const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },

  password: {
    type: String,
    required: true,
    // validate?
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  household_id: {
    type: mongoose.Schema.ObjectId, ref: "Household"
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
