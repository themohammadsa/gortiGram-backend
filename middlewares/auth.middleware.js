const jwt = require('jsonwebtoken');

const authHandler = async (req, res, next) => {
    const token = req.headers.authorization; 
    if (token) {
      try {
            const decoded = jwt.verify(token, process.env.SECRET);
            req.user = { userId: decoded.userId }
            return next();
          } catch (error) {
              console.log("Error occured - middleware", error);
              res.status(401)
              .json({ 
                success: false, 
                message: "Server error. Please try again." })
          }
    } else {
        res.status(401)
        .json({ 
          success: false, 
          message: "Token is not present. Please check again." })
    }
}

module.exports = { authHandler }