import mongoose from "mongoose";

export default function dbConnect(){
    try {
        const conn = mongoose.connect(String(process.env.MONGO_BD_CONNECTION_STRING));
        return conn;
    }
    catch(e){
        throw new Error("failed to connect to the database");
    }
    
}