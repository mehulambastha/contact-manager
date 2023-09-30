const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async (req, res) => {
    let {username, email, password} = req.body
    const salt = await bcrypt.genSalt(15)
    const hashedPassword = await bcrypt.hash(password, salt)
    password = hashedPassword
    // check if the user already exists
    if(!username || !email || !password) {
        res.status(400)
        throw new Error("Dont give empty data")
    }

    // search the database for existing user
    const allUsers = await User.find()
    const existingUser = await User.findOne({email})
    console.log(existingUser)
    // if existing users are present
    if (existingUser){
        res.status(400) 
        throw new Error("User already registered!")
    }
    const newUser = new User({username, email, password})
    await newUser.save()
    res.json({message: "User Registered", details: {username, email, password}})
    console.log(`hashed: ${hashedPassword}`)
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Enter everything")
    }
    const user = await User.findOne({email})

    // if the user exists and the entered password is correct
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id,
            },
        }, process.env.ACC_TOKEN, { expiresIn: "15m" }
        )        
        res.status(200).json({accessToken})
    }else{
        res.status(400)
        throw new Error("Wrong email or password")
    }
})
const currentUser = asyncHandler(async (req, res) => {
    console.log(req.user.id) 
    console.log(`req body is: `, req.body)
    res.json({message: "Current User"})
})
const showUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.json(users)
})

module.exports = {registerUser, loginUser, currentUser, showUser}