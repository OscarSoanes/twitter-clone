const express = require("express");
const router = express.Router();

// Route: https://.../api/account/...

// POST request for logging in
router.post("/login", function (req, res, next) {
  res.send("login: TODO");
});

// POST request for signing up
router.post("/signup", function (req, res, next) {
  res.send("sign up: TODO");
});

module.exports = router;
