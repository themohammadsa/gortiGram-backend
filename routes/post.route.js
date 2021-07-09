const express = require("express");
const router = express.Router();
const { authHandler } = require("../middlewares/auth.middleware.js")
const { postImage } = require("../controllers/postImage.controller.js");
const { getPosts } = require("../controllers/getPosts.controller.js");
const { likePost, dislikePost } = require("../controllers/likeHandler.controller.js");
const { postComment } = require("../controllers/commentHandler.controller.js");

router.route("/get")
  .get(authHandler, getPosts)

router.route("/add")
  .post(authHandler, postImage)

router.route("/likePost")
  .post(authHandler, likePost)

router.route("/dislikePost")
  .post(authHandler, dislikePost)

router.route("/postComment")
  .post(authHandler, postComment)


module.exports = router;
