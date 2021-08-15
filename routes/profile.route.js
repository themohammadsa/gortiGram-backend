const express = require("express");
const router = express.Router();
const { authHandler } = require("../middlewares/auth.middleware.js")
const { postProfile, getProfile, getPosts, searchUser } = require("../controllers/profile.controller.js");
const { followUser, unFollowUser } = require("../controllers/followUser.controller.js");
const { getSuggestions } = require("../controllers/getSuggestions.controller.js");

router.route("/get")
  .post(authHandler, getProfile)

router.route("/add")
  .post(authHandler, postProfile)

router.route("/getPosts")
  .post(authHandler, getPosts)

router.route("/followUser")
  .post(authHandler, followUser)
  
router.route("/unFollowUser")
  .post(authHandler, unFollowUser)

router.route("/searchUser")
  .post(authHandler, searchUser)

router.route("/getSuggestions")
  .get(authHandler, getSuggestions)

module.exports = router;
