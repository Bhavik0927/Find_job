import mongoose, { model, Schema } from "mongoose";

const jobSchema = Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String
    }],
    salary:{
        type:Number,
        required:true
    },
    experienceLevel:{
        type: Number,
        required: true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    application:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company',
    }]
},{timestamps: true}); 

export const Job = model("Job",jobSchema);