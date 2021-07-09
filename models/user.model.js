const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: "Name of the user is required",
    },
    password: {
        type: String,
        required: "Password is a required attribute",
    },
    username: {
        type: String,
        required: "Username is a mandatory attribute",
        lowercase: true
    },
    email: {
        type: String,
        required: "Email is a mandatory attribute",
        unique: true,
        lowercase: true
    }
})

const User = mongoose.model("UserGortiGram", userSchema);

module.exports = { User }