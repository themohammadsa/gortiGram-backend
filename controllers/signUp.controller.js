const { User } = require("../models/user.model")
const { Profile } = require("../models/profile.model")
var bcrypt = require('bcrypt');
var saltRounds = 4;
const salt = bcrypt.genSaltSync(saltRounds);

const signUp = async (req, res) => {
        const { name, email, password, username } = req.body;
        const checkData = name && email && password
        if (checkData) {
            try {
                const findEmail = await User.findOne({email: email});
                const findUsername = await User.findOne({username: username});
         
                if (!findUsername && !findEmail) {
                    const hash = bcrypt.hashSync(password, salt);
                    userData = { name, email, username, password: hash }

                    profileData = { username, name }
                   const NewProfile = new Profile(profileData)
                    const response = await NewProfile.save()

                    const NewUser = new User(userData)
                    await NewUser.save()
                    res.status(201).json({ 
                    success: true, 
                    message: "SignUp completed" })
                } else {
                    res.status(409).json({ 
                      status: false, 
                      message: "409" });
                }
            }
            catch (error) {
                res.status(412).json({ 
                  success: false, 
                  message: "Cannot register user. Please try again." });
            }
        }
        else {
            res.status(412).json({ 
              success: false, 
              message: "Data is missing" });
        }
    }

module.exports = { signUp }