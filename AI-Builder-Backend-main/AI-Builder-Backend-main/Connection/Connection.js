const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const connectionWithMongo = process.env.MONGO_DB_URL.replace(

    "<password>",

    process.env.PASSWORD

)


const connection = mongoose.connect(connectionWithMongo)

.then(() => {

    console.log("Connection Successfull")

})

.catch((err) => {

    console.log("Some Error Occured" , err)

})

module.exports = connection;