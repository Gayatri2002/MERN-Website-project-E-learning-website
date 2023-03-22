const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file: {
        type:String,
        required:true
    }

    
})

//creating collection

const Ufiles = new mongoose.model("Ufiles",fileSchema);

module.exports = Ufiles;