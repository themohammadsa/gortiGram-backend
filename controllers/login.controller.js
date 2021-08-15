const { User } = require("../models/user.model")
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const login = async (req, res) => {
        const { email, password } = req.body;
        const checkData = email && password

        if (checkData) {
            try {
                const user = await User.findOne({ email: email });
                if (user !== null) {
                  const validatePassword = bcrypt.compareSync(password, user.password)
                    if (validatePassword) {
                       const token = jwt.sign(
                         { userId: user._id }, 
                         process.env.SECRET, 
                         { expiresIn: '24h' })

                        res.status(200).json({ 
                          success: true, 
                          message: "Login Successful", 
                          name: user.name,
                          email: user.email,
                          username: user.username,
                          token, })
                    } else {
                        return res.status(409).json({ 
                          success: false,
                          message: '409' });
                    }
                } else {
                    return res.status(403).json({ 
                      success: false, 
                      message: '403' })
                }
            }
            catch (error) {
                console.log("error in user login", error);
                res.status(412).json({ 
                  success: false, 
                  message: "Server error. Please try again." });
            }
        }
        else {
            res.status(412).json({ 
              success: false, 
              message: "Data is missing" });
        }
    }

module.exports = { login }