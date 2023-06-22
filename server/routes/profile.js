const express = require("express");
const router = express.Router({ mergeParams: true });

// Route: https://.../api/user/:username...

// GET request for getting profile information
router.get("/details", function (req, res, next) {
  res.send(`Get details for ${req.username}!`);
});

// GET tweets by user using count
router.get("/status/:count", function (req, res, next) {
  res.send(`Get posts comment under ${req.username} * ${req.params.count}`);
});

module.exports = router;
