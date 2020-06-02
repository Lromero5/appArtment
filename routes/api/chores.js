const router = require("express").Router();
const choresController = require("../../controllers/choresController");


router.route("/")
  .get(choresController.findAll)
  .post(choresController.create);


router
  .route("/:id")
  .get(choresController.findById)
  .put(choresController.update)
  .delete(choresController.remove);

module.exports = router;
