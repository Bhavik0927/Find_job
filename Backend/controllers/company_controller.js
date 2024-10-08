import { Company } from "../models/companySchema.js";

export const registerCompany = async(req,res) =>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message: "Company name is required",
                success: false
            })
        }

        let company = await Company.findOne({ name: companyName });
        if(company){
            return res.status(400).json({
                message: "You can't register same company",
                success:false
            })
        }
        company = await Company.create({
            name: companyName,
            userId: req.id
        })
    } catch (error) {
        console.log(error)
    }
}