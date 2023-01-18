const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");
const funController = require("../controllers/home_controller");

console.log("router loded");

//router.get("/", homeController.home);
router.get("/", homeController.fun);

module.exports = router;
