const mongoose = require("mongoose");

const entrySchema = mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        date: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
            },
        },
        day: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { weekday: "long" });
            },
        },
        time: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            },
        },
        date: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
            },
        },
        day: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { weekday: "long" });
            },
        },
        time: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            },
        },
        date: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
            },
        },
        day: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { weekday: "long" });
            },
        },
        time: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            },
        },
        date: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
            },
        },
        day: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleDateString("en-US", { weekday: "long" });
            },
        },
        time: {
            type: String,
            default: () => {
                const now = new Date();
                return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            },
        },
        milestones:{
            type:String,
            required:[true,"Milestones are required"],
        },
        thoughts:{
            type:String,
            required:[true,"Thoughts are required"],
        },
        gratitude:{
            type:String,
            required:[true,"Gratitude is required"],
        },
        moveOn:{
            type:String,
            required:[true,"MoveOn is required"],
        }
    },
    {
        timestamps:true
    },
);

module.exports = mongoose.model("Entry",entrySchema);