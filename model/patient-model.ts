import mongoose , {Schema} from "mongoose";

const patientschema = new Schema({
    fullname: {
        required : true,
        type : String,
    },
    email :{
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    dateOfBirth : {
        type : Date,
        required : true,
    },
    height : {
        type : Number,
        required : true,
    },
    weight :{
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
})
 export const Patient = mongoose.models.Patient ?? mongoose.model("Patient", patientschema);
