const express = require("express");
const router = express.Router();

const accountRouter = require("./account");
const profileRouter = require("./profile");
const postsRouter = require("./posts");

// Route: https://.../api/...

// GET request for home page tweets by count
router.get("/home/:count", function (req, res, next) {
  res.send(`Home page ${req.params.count}`);
});

router.use("/account", accountRouter);
router.use(
  "/user/:username",
  (req, res, next) => {
    req.username = req.params.username;
    next();
  },
  profileRouter
);
router.use("/status", postsRouter);

module.exports = router;
