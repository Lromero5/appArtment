const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  displayName: {
    type: String,
    trim: true
  },

  username: {
    type: String,
    trim: true,
    required: true
  },

  password: {
    type: String,
    required: true,
    
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


UserSchema.pre("save", function(callback) {
  let user = this;

  
  if (!user.isModified("password")) return callback();

  
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

const User = mongoose.model("User", UserSchema);

module.exports = User;