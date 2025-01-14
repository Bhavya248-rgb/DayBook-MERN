const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if( !username || !email || !password){
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed Password:",hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log("User Created:",user);
    if(user){
        res.status(201).json({
            _id:user.id,
            username:user.username,
            email:user.email,
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid User Data");
    }
    // res.status(201).json({message:"Registered!"});
});

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Please fill in all fields");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign(
            {
                user:{
                    username : user.username,
                    email : user.email,
                    id : user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn : "15m",
            }
        );
        res.status(200).json({accessToken,user});
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
    // res.status(200).json({message:"login!"});
});

//@desc Current User info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async(req,res)=>{
    console.log("req.user:",req.user);
    res.json(req.user);
});

module.exports = {registerUser,loginUser,currentUser};