const { Post } = require("../models/post.model")

const getPosts = async (req, res) => {
      try {
        const postsData = await Post.find({}).limit(30).sort({createdAt: -1})
        
        res.json({ 
        success: true,  
        postsData
        })     
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

module.exports = { getPosts }