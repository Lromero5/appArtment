const router = require("express").Router();
const householdController = require("../../controllers/householdController");

// Matches with "/api/households"
router.route("/")
  .get(householdController.findAll)
  .post(householdController.create);

// Matches with "/api/households/:id"
router
  .route("/:id")
  .get(householdController.findById)
  .put(householdController.update)
  .delete(householdController.remove);

module.exports = router;
