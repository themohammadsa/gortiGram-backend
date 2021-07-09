const { Profile } = require("../models/profile.model")

const followUser = async (req, res) => {
    const { myUsername, username } = req.body;
      try {
        const myUserPromise = Profile.findOne({username: myUsername})
        const userPromise = Profile.findOne({username: username})
        const [myUser, user] = await Promise.all([myUserPromise, userPromise]);

        user.followers = user.followers.concat({ username: myUsername, 
        profilePicture: myUser.profilePicture})
        myUser.following = myUser.following.concat({ username: username, 
           profilePicture: user.profilePicture})

        await Promise.all([myUser.save(), user.save()]);
        res.status(200).json({ 
        success: true, 
        message: "User followed"}) 
        }  
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
}


const unFollowUser = async (req, res) => {
    const { myUsername, username } = req.body;

      try {
        const myUserPromise = Profile.findOne({username: myUsername})
        const userPromise = Profile.findOne({username: username})
        const [myUser, user] = await Promise.all([myUserPromise, userPromise]);

        user.followers = user.followers.filter((follower) => follower.username !== myUsername)

        myUser.following = user.following.filter((followingUser) => followingUser.username !== username)
   
        await Promise.all([myUser.save(), user.save()]);
        res.status(200).json({ 
        success: true, 
        message: "User unfollowed"}) 
        }  
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
}

module.exports = { followUser, unFollowUser }