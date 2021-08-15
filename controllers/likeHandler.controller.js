const { Post } = require("../models/post.model")
const { Profile } = require("../models/profile.model")

const likePost = async (req, res) => {
    const { username, postId } = req.body;
      try {
        const { profilePicture } = await Profile.findOne({username: username})
        const findPost = await Post.findById({ _id: postId })
        const hasUserLiked = findPost.likes.some((userLiked) => userLiked.username === username)
        if(!hasUserLiked) {
        const likeData = { username, profilePicture }
        findPost.likes = findPost.likes.concat(likeData)
        const response = await findPost.save()
        res.status(200).json({ 
        success: true, 
        message: "Post liked"}) 
        }
        else {
        res.status(200).json({ 
        success: true, 
        message: "Post already liked by user"}) 
        }
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

const dislikePost = async (req, res) => {
    const { username, postId } = req.body;
      try {
        const findPost = await Post.findById({ _id: postId })
        findPost.likes = findPost.likes.filter((likedUser) => likedUser.username !== username)
        const response = await findPost.save()
        res.status(200).json({ 
        success: true, 
        message: "Post disliked"}) 
        } 
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 



module.exports = { likePost, dislikePost }