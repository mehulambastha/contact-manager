const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONN_STR)
        console.log("Database connection: ", connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log("Err hogya macho: ", err)
    }
}

module.exports = connectDb