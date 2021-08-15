const mongoose = require("mongoose");
const { Schema } = mongoose;

const followingSchema = new Schema({
  username: String,
  profilePicture: String
})

const profileSchema = new Schema({
  username: String,
  name: String,
  bio: String,
  website: String,
  profilePicture: String,
  followers: [followingSchema],
  following: [followingSchema],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = { Profile };