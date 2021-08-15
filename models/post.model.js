const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  username: String,
  profilePicture: String
})

const commentSchema = new Schema({
  username: String,
  comment: String
})

const postSchema = new Schema({
  userId: String,
  username: String,
  profilePicture: String,
  caption: String,
  filename: String,
  url: String,
  likes: [likeSchema],
  comments: [commentSchema]
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };