const { Post } = require("../models/post.model")
const { Profile } = require("../models/profile.model")

const postComment = async (req, res) => {
    const { postId, username, comment } = req.body;

      try {
        const findPost = await Post.findById({ _id: postId })
        const commentData = { username, comment }
        findPost.comments = findPost.comments.concat(commentData)
        const response = await findPost.save()
        res.status(200).json({ 
        success: true, 
        message: "Comment added"})      
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

module.exports = { postComment }
