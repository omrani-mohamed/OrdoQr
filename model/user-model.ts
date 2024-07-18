import mongoose , {Schema} from "mongoose";

const userschema = new Schema({
    nom: {
        required : true,
        type : String,
    },
    prenom :{
        type : String,
        required :true,
    },
    email :{
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    password :{
        type : String,
        required : true,
    },
    role :{
        type : String,
        required : true,
    },
    specialty : {
        type : String,
        required : true,
    },
    adress : {
        type : String,
        required : true,
    }
})
 export const User = mongoose.models.User ?? mongoose.model("User", userschema);
