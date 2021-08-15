const { Profile } = require("../models/profile.model")

const getSuggestions = async (req, res) => {
      try {
        const suggestions = await Profile.find({})
        suggestions.length = 5
        res.json({ 
        success: true,  
        message: "Suggestions given",
        suggestions})     
      }    
      catch (error) {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again." })
      }
} 

module.exports = { getSuggestions }