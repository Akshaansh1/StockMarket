import express from  "express";
import { userModel } from "../Models/userModel";
const userRoutes  = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

userRoutes.post('/signup' , async (req , res) => {
    try {
        const {firstname , lastname , email , password} = req.body;
        const hashedpassword = await bcrypt.hash(password , 10);

        await userModel.create({
            firstname, lastname, email, 
            password : hashedpassword
        });
        
        res.status(201).json({
            msg : "Signup completed"
        });
    }
    catch(e){
        res.status(500).json({
            error : e
        })
    }
});

userRoutes.post('/signin' , async (req , res) => {
    try {
        const {email , password} = req.body;
        const user = await userModel.findOne({email});
        if(!user) {
            res.status(400).json({err : "email wrongly enetered"});
            return;
        }

        const decoded = await bcrypt.compare(password , user.password);
        if(!decoded){
            res.status(400).json({err : "Password Error"});
            return;
        }

        const token = jwt.sign({
            id : user._id.toString()
        } , process.env.JWT_TOKEN as string);

        res.json({
            msg : "Signin Succesful",
            token : token
        })
    }

    catch(e){
        res.status(500).json({
            error : e
        })
    }
})

export default userRoutes;