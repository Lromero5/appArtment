const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
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

UserSchema.pre('save',function(next){
  if(!this.isModified('password'))
      return next();
  bcrypt.hash(this.password,10,(err,passwordHash)=>{
      if(err)
          return next(err);
      this.password = passwordHash;
      next();
  });
});

UserSchema.methods.comparePassword = function(password,cb){
  bcrypt.compare(password,this.password,(err,isMatch)=>{
      if(err)
          return cb(err);
      else{
          if(!isMatch)
              return cb(null,isMatch);
          return cb(null,this);
      }
  });
}


const User = mongoose.model("User", UserSchema);

module.exports = User;
