const express = require("express");
const router = express.Router();
const { authHandler } = require("../middlewares/auth.middleware.js")
const { postImage } = require("../controllers/postImage.controller.js");
const { getPosts, deletePost } = require("../controllers/posts.controller.js");
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

router.route("/deletePost")
  .post(authHandler, deletePost)

module.exports = router;
