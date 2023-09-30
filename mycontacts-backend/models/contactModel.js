const mongoose = require("mongoose")

const Contact = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Enter full name"]
    },
    email: {
        type: String,
        required: [true, "Enter email id"]
    },
    phone: {
        type: Number,
        required: [true, "Enter number"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("Contact", Contact)