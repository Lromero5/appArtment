const router = require("express").Router();
const choresRoutes = require("./chores");
const householdRoutes = require("./households")
const userRoutes = require("./users")
// Book routes
router.use("/chores", choresRoutes);
router.use("/households",householdRoutes)
router.use("/users",userRoutes)
module.exports = router;
