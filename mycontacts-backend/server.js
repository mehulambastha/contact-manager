const express = require("express")
const connectDb = require("./config/dbCOnnection")
const dotenv = require("dotenv")
const errorHandler = require("./middleware/errorHandler")
const app = express()
app.use(express.json())
app.use(errorHandler)
dotenv.config()

connectDb()

// parse JSON in the express app

const port = process.env.PORT || 5002


app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/contacts", require("./routes/contactRoute"))

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})