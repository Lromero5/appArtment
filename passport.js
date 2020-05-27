const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/users');

const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

// authorization 
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "NoobCoder"
},(payload,done)=>{
    User.findById({_id : payload.sub},(err,user)=>{
        if(err) {
        // console.log('err when trying to find user', err)
            return done(err,false);
        }
        if(user) {
        // console.log('we found the user passport', user)
            return done(null,user);
        }
        else {
            // console.log('we did not find a user!! pasport stuff')
            return done(null,false);
        }
    });
}));

// authenticated local strategy using username and password
passport.use(new LocalStrategy((username,password,done)=>{
    // console.log('Inisde local strategy passport!!')
    User.findOne({username},(err,user)=>{
        // something went wrong with database
        if(err)
            return done(err);
        // if no user exist
        if(!user)
            return done(null,false);
        // check if password is correct
        user.comparePassword(password,done);
        
    });
}));