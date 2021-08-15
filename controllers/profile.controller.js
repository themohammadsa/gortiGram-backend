const { Profile } = require("../models/profile.model")
const { Post } = require("../models/post.model")

const postProfile = async (req, res) => {
        const { bio, website, profilePicture, username } = req.body;

        if (username) {
          try {
            const findUser = await Profile.findOne({username: username})

            if(bio) {
              findUser.bio = bio
            }
            if (website) {
              findUser.website = website
            } 
            if (profilePicture) {
              findUser.profilePicture = profilePicture
            }                     
            const response = await findUser.save() 
            res.status(201).json({ 
              success: true, 
              message: "Profile Updated" })
              }
              catch (error) {
                res.status(412).json({ 
                success: false, 
                message: "Cannot update profile. Please try again." });
            }
          }
          else {
              res.status(412).json({ 
                success: false, 
                message: "Data is missing" });
          }
}

const getProfile = async (req, res) => {
        const { username } = req.body
        if (username) {
            try {
                const findUser = await Profile.findOne({username: username});
                res.status(201).json({ 
                  success: true, 
                  message: "Profile found",
                  findUser })
                }
            catch (error) {
                res.status(412).json({ 
                  success: false, 
                  message: "Cannot find profile. Please try again." });
            }
          }
          else {
              res.status(412).json({ 
                success: false, 
                message: "Username is missing" });
          }
}

const getPosts = async (req, res) => {
        const { username } = req.body

        if (username) {
            try {
                const findPosts = await Post.find({username: username}).sort({createdAt: -1});
                res.status(201).json({ 
                  success: true, 
                  message: "Posts found",
                  findPosts })
                }
            catch (error) {
                res.status(412).json({ 
                  success: false, 
                  message: "Cannot find posts. Please try again." });
            }
          }
          else {
              res.status(412).json({ 
                success: false, 
                message: "Username is missing" });
          }
}

const searchUser = async (req, res) => {
      const { searchValue } = req.body

      try {
        const users = await Profile.find({})
        const searchResult = users.filter((user) => user.username.includes(searchValue) )
        res.json({ 
        success: true,  
        searchResult})  
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

module.exports = { postProfile, getProfile, getPosts, searchUser }