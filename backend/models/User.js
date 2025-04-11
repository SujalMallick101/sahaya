const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : { type : String, required: true},
    email : { type : String, required: true },
    password : { type : String, required: true },
    dob : { type: String, },
    role : {
        type : String,
        enum : ["Admin", "Registered_User", "Visitor"],
        default : "Visitor",
    },
    createdAt : { type: Date, default: Date.now() },
})

module.exports = mongoose.model("User", UserSchema);