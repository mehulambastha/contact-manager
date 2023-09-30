const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter username"]
    },
    email: {
        type: String,
        required: [true, "Enter email"],
        unique: [true, "Email already registered with us"]
    },
    password: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)