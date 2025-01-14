const asyncHandler = require('express-async-handler');
const Entry = require("../models/entryModel");

//@desc create new entry
//@route POST /api/entries
//@access private
const createEntry = asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const {milestones,thoughts,gratitude,moveOn} = req.body;

    const entry = await Entry.create({
        user_id:req.user.id,
        milestones,
        thoughts,
        gratitude,
        moveOn
    });

    res.status(200).json(entry);
});

//@desc GET all entries
//@route GET /api/entries
//@access private
const getEntries = asyncHandler(async(req,res)=>{
    const entries = await Entry.find({user_id:req.user.id});
    // res.status(200).json({milestones:"milestones",thoughts:"thoughts",gratitude:"gratitude",moveOn:"moveOn"});
    res.status(200).json(entries);
});

//@desc GET entry
//@route GET /api/entries/:id
//@access private
const getEntry = asyncHandler(async(req,res)=>{
    const entry = await Entry.findById(req.params.id);
    if(!entry){
        res.status(400);
        throw new Error("Entry not found");
    }
    res.status(200).json(entry);
});

//@desc Update entry
//@route PUT /api/entries/:id
//@access private
const updateEntry = asyncHandler(async(req,res)=>{
    const entry = await Entry.findById(req.params.id);
    if(!entry){
        res.status(400);
        throw new Error("Entry not found");
    }
    if(entry.user_id.toString()!=req.user.id){
        res.status(403);
        throw new Error("Contact not found");
    }

    const updatedEntry = await Entry.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},//why? because we want to return the updated entry so we set new to true
    );
    // res.status(200).json({message:"Updated entry"});
    res.status(200).json({updatedEntry});
});

module.exports = {createEntry,getEntries,getEntry,updateEntry};