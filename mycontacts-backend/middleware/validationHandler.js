const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async(req, res, next)=>{
    console.log(`Req Body recieved is: ${req.body} and user is ${req.user}`)
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization

    console.log("Auth Header is: ", authHeader)
    if(authHeader && (authHeader.startsWith("Bearer"))){
        token = authHeader.split(" ")[1]
        console.log(`Token is: ${token}`)
        jwt.verify(token, process.env.ACC_TOKEN, (err, decoded)=>{
            if(err){
                res.status(401)
                throw new Error("User not authorized")
            }
            req.user = decoded.user
            next()
        }) 
        if(!token){
            res.status(401)
            throw new Error("Invalid token or token missing")
        }
    }
})

module.exports = validateToken