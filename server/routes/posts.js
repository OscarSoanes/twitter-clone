const express = require("express");
const router = express.Router();

// Route: https://.../api/status/

// POST status for creating a new Tweet
router.post("/:userId", function (req, res, next) {
  res.send("Create a new post");
});

// GET a tweet at id
router.get("/:tweetId", function (req, res, next) {
  res.send("Get a post");
});

// DELETE a tweet at id
router.delete("/:tweetId", function (req, res, next) {
  res.send("Delete a post");
});

// PUT update a tweet at id
router.put("/:tweetId", function (req, res, next) {
  res.send("Update a post");
});

// POST like a specific tweet
router.post("/:tweetId/like/:currentUser", function (req, res, next) {
  res.send(`Liking a tweet at ${req.params.tweetId} for ${req.params.currentUser}`);
});

// DELETE remove like from a specific tweet
router.delete("/:tweetId/like/:currentUser", function (req, res, next) {
  res.send(`Removing like on tweet at ${req.params.tweetId} for ${req.params.currentUser}`);
});

// POST retweeting another tweet
router.post(":tweetId/retweet/:userId", function (req, res, next) {
  res.send(`Retweeting ${req.params.tweetId}'s to ${req.params.userId}`);
});

module.exports = router;
