import { User } from "../models/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const Register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;
        if (!fullName || !email || !phoneNumber || !role || !password) {
            return res.status(400).json({
                message: "Something is Missing",
                success: false
            })
        } 
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exist with this email",
                success: false
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashPassword,
            role,
            profile:{
                profilePhoto: cloudResponse.secure_url,
            }
        })

        return res.status(201).json({
            message: "Account is Created",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }

        // Check role is correct or Not
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role",
                success: false
            })
        }

        const tokenData = { userId: user._id }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        user = {
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile:user.profile.profilePhoto
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: "strict" }).json({
            message: `Welcome back ${user.fullName}`,
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;
        // console.log(fullName, email, phoneNumber, bio, skills);
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        

        // Cloudinary came here
        let skillsArray;
        if(skills){ skillsArray =  skills.split(','); }
        
        const userId = req.id // middleware Authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        if(fullName) {user.fullName = fullName}
        if(email) {user.email = email}
        if(phoneNumber) {user.phoneNumber = phoneNumber}
        if(bio) {user.profile.bio = bio}
        if(skills) {user.profile.skills = skillsArray}

        // resume comes here later
        if(cloudResponse){
            user.profile.resume = cloudResponse.secure_url  // save the cloudinary url
            user.profile.resumeOriginalName = file.originalname //Save the original file name

        }

        await user.save();

        user = {
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile update Successfully",
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}