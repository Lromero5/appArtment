const router = require("express").Router();
const userController = require("../../controllers/userController");
const JWT = require('jsonwebtoken');
const passport = require('passport');
const passportConfig = require('../../passport');
const User = require('../../models/users');

const signToken = userID =>{
  return JWT.sign({
      iss : "NoobCoder",
      sub : userID
  },"NoobCoder",{expiresIn : "1h"});
}

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


  router.post('/register',(req,res)=>{
    const { username, password, email} = req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
        else{
            const newUser = new User({username, password, email});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
});

router.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,username} = req.user;
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
       res.status(200).json({isAuthenticated : true,user : {username}});
    }
});

//removes the jwt token. having issues with this route 5/22
router.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username : ""},success : true});
});

// //this is used for persistance. This route will allow the user to stay logged in, if they don't log out.
router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});




module.exports = router;
