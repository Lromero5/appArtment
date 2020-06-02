const router = require("express").Router();
const householdController = require("../../controllers/householdController");
const transactionController = require("../../controllers/transactionsController");
const choresController = require("../../controllers/choresController");

router.route("/")
  .get(householdController.findAll)
  .post(householdController.create);


router
  .route("/:id")
  .get(householdController.findById)
  .put(householdController.update)
  .delete(householdController.remove)
  .put(householdController.updateMember)


router
.route("/:id/transaction")
.post(transactionController.create)

router
.route("/:id/transaction/:txID")
.delete(transactionController.remove);


router
.route("/:id/chores")
.post(choresController.create);



module.exports = router;
