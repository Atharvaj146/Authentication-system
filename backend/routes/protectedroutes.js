const express = require("express");
const router = express.Router();
const protect = require("../middleware/authmiddleware");

router.get("/dashboard", protect, function (req, res) {
  res.status(200).json({
    message: "Access granted",
    userId: req.user
  });
});

module.exports = router;
