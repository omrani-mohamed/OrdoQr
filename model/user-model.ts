import mongoose , {Schema} from "mongoose";

const userschema = new Schema({
    name: {
        required : true,
        type : String,
    },
    firstname :{
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
        required : false,
    },
    address : {
        type : String,
        required : false,
    }
})
 export const User = mongoose.models.User ?? mongoose.model("User", userschema);
