const router = require("express").Router();
const userController = require("../../controllers/userController");
const JWT = require('jsonwebtoken');
const User = require('../../models/users');

//new code
const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// // Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


//new code
// LOGIN ROUTE
router.route("/login").post((req, res) => {
  auth
    .logUserIn(req.body.username, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});
// SIGNUP ROUTE
router.route("/signup").post((req, res) => {
  userController.signUp(req, res);
});
//LOGOUT ROUTE
router.route("/logout").get((req, res) => {
  console.log('we hit our logout routeee')
  res.clearCookie('access_token');
  res.json({user:{username : ""},success : true});
});


// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route("/:id").get(isAuthenticated, (req, res) => {
  console.log('isAuthenticated', isAuthenticated)
  db.User.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch(err => res.status(400).send(err));
});


module.exports = router;
