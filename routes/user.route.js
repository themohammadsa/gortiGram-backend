const express = require('express');
const router = express.Router();
const { authHandler } = require("../middlewares/auth.middleware.js")
const { signUp } = require("../controllers/signUp.controller")
const { login } = require("../controllers/login.controller")

router.route("/signup")
  .post(signUp)

router.route("/login")
  .post(login)

module.exports = router;
