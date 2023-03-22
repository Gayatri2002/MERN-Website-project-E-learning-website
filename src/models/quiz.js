const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    q1: {
        type:String,
        required:true
    },

    q2: {
        type:String,
        required:true,
        
    },

    q3: {
        type:String,
        required:true,
        
    }
    
})

//creating collection

const Quiz = new mongoose.model("Quiz",quizSchema);

module.exports = Quiz;