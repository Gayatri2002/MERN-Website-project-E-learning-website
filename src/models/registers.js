const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true,
        unique:true
    },

    mobilenumber: {
        type:String,
        required:true,
        unique:true
    },

    college: {
        type:String,
        required:true,
        
    },

    password: {
        type:String,
        required:true,
        
    },

    repeatpassword: {
        type:String,
        required:true,
        
    }
})

//creating collection

const Register = new mongoose.model("Register",studentSchema);

module.exports = Register;