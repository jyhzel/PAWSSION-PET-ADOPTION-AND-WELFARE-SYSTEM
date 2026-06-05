const express = require("express");

const router = express.Router();

const {
  getUserDashboard,
} = require("../controllers/userController");

router.get("/dashboard", getUserDashboard);

module.exports = router;