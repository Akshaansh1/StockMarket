import express from "express";
import userRoutes from "./Routes/userRoutes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/api/user' , userRoutes);

app.get('/' , (req , res) => {
    res.send("Hello");
});

async function startApp() {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL as string);

        if(connection){
            console.log("Connected to MongoDB");
            app.listen(3000, () => {console.log("Listening to Port 3000.")})
        }
    }

    catch(e){
        console.log("Error Occured" , e);
    }
}

startApp();