const mongoose = require("mongoose");


//creating a database
mongoose.connect("mongodb://localhost:27017/iwp",{
    useNewUrlParser:true,
    useUniFiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

