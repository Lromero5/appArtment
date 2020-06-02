const router = require("express").Router();
const userController = require("../../controllers/userController");
const JWT = require('jsonwebtoken');
const User = require('../../models/users');


const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");



router.route("/")
  .get(userController.findAll)
  .post(userController.create);


router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



router.route("/login").post((req, res) => {
  auth
    .logUserIn(req.body.username, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

router.route("/signup").post((req, res) => {
  userController.signUp(req, res);
});

router.route("/logout").get((req, res) => {
  
  res.clearCookie('access_token');
  res.json({user:{username : ""},success : true});
});



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
