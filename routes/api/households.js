const router = require("express").Router();
const householdController = require("../../controllers/householdController");
const transactionController = require("../../controllers/transactionsController")
// Matches with "/api/households"
router.route("/")
  .get(householdController.findAll)
  .post(householdController.create);

// Matches with "/api/households/:id"
router
  .route("/:id")
  .get(householdController.findById)
  .put(householdController.update)
  .delete(householdController.remove)
  .put(householdController.updateMember)

//"api/households/:id/transaction"
router
.route("/:id/transaction")
.post(transactionController.create)

router
.route("/:id/transaction/:txID")
.delete(transactionController.remove);



module.exports = router;
