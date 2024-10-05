import mongoose, { Schema,model } from "mongoose";

const user = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Student','recruiter'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type: mongoose.Schema.Types.ObjectId, ref:'Company'},
        profilePhoto:{
            type:String,
            default:''
        }
    }
},{timestamps: true});

export const User = model("User",user); 