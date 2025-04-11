const mongoose = require("mongoose");

const dbConnect = () => {
    if(!process.env.DB_URL){
        console.log('incorrect url');
    }
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Database Connected Succsessfully!"))
    .catch((err) => console.log("Database Connection Unsuccessfull!"))
}

module.exports = dbConnect;