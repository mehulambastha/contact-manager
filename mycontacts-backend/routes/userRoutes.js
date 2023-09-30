const express = require('express')
const router = express.Router()
const validateToken = require("../middleware/validationHandler")
const { registerUser, loginUser, currentUser, showUser } = require("../controllers/userController")


router.route("/register").post(registerUser) 
router.route("/login").post(loginUser) 
router.route("/").get(showUser)



// Current use, to be able to view by team members only,
router.route("/current").get(validateToken, currentUser) 

module.exports = router