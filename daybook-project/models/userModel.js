const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Enter Username:"],
        },
        email:{
            type:String,
            required:[true,"Enter email:"],
        },
        password:{
            type:String,
            required:[true,"Enter a Strong Password:"],
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("User",userSchema);