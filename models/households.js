const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const householdSchema = new Schema({
  household_name: { type: String, required: true },
  members: [ ], //this should hold the user_id's from the users collection
  chores: {type: String}, //will be imputed by the users
  finances: {type: String}, //will be imputed by the users
});

const household = mongoose.model("Household", householdSchema);

module.exports = household;