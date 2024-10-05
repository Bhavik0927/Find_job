import mongoose, { Schema,model } from "mongoose";

const companySchema = Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    website:{
        type:String,
        
    },
    location:{
        type:String,
    },
    logo:{
        type:String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps: true});

export const Company = model('Company',companySchema);