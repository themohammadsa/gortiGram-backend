const { Post } = require("../models/post.model")
const { Profile } = require("../models/profile.model")

const postImage = async (req, res) => {
    const { userId } = req.user
    const { filename, url, caption, username } = req.body;
      try {
        const { profilePicture } = await Profile.findOne({username: username})
        const data = { userId, filename, url, caption, username, profilePicture }
        const NewPost = new Post(data)
        const response = await NewPost.save()
        res.json({ 
        success: true, 
        message: "Post added", 
        response
        })     
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

module.exports = { postImage }