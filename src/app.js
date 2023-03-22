const { application } = require("express");
const express = require("express");
const path = require("path");
require("./db/conn");
const Register = require("./models/registers");
const Ufiles = require("./models/files");
const Quiz = require("./models/quiz");
const hbs = require("hbs");
 
const app = express(); 
const port = process.env.PORT || 3000;

//setting path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//midleware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


//routing part
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/courses",(req,res)=>{
    res.render("courses");
})

app.get("/question",(req,res)=>{
    res.render("question");
})

app.get("/readmore",(req,res)=>{
    res.render("readmore");
})

app.get("/WebDesign",(req,res)=>{
    res.render("WebDesign");
})

app.get("/react",(req,res)=>{
    res.render("react");
})

app.get("/mern",(req,res)=>{
    res.render("mern");
})

app.get("/reg",(req,res)=>{
    res.render("reg");
})

app.get("/login",(req,res)=>{
    res.render("login");
})


//File upload option and file saving in mongodb
app.post("/WebDesign", async (req,res)=>{
    try{
        
        const file = req.body.file;
        const fileStudent = new Ufiles({
                file : req.body.file,
                

            })


        const registered = await fileStudent.save();
        res.status(201).render("WebDesign");
        res.send("Uploaded Successfully")

        
    }catch(error){
        res.status(400).send(error);
    }
})


//File upload option and file saving in mongodb
app.post("/react", async (req,res)=>{
    try{
        
        const file = req.body.file;
        const fileStudent = new Ufiles({
                file : req.body.file,
                

            })


        const registered = await fileStudent.save();
        res.status(201).render("react");
        res.send("Uploaded Successfully")

        
    }catch(error){
        res.status(400).send(error);
    }
})


//File upload option and file saving in mongodb
app.post("/mern", async (req,res)=>{
    try{
        
        const file = req.body.file;
        const fileStudent = new Ufiles({
                file : req.body.file,
                

            })


        const registered = await fileStudent.save();
        res.status(201).render("mern");
        res.send("Uploaded Successfully")

        
    }catch(error){
        res.status(400).send(error);
    }
})



//quiz ans savinf and checking in database
app.post("/question", async (req,res)=>{
    try{
        
            const quizStudent = new Quiz({
                q1 : req.body.q1,
                q2 : req.body.q2,
                q3 : req.body.q3,

            })


            if(q1="Hyper Text Markup Language"){
                
                
                if(q2="Inside the head section"){
                    
                    if(q3="Cascading Style Sheet"){
                        res.send("Answers are correct");
                    }
                }
            }
            else{
                res.send("Icorrect answers");
            }

 
            const registered = await quizStudent.save();
            res.status(201).render("question");
            
            
            

            
            

        
    }catch(error){
        res.status(400).send(error);
    }
})


//creating new user in database
app.post("/reg", async (req,res)=>{
    try{
        
        const password = req.body.password;
        const cpassword = req.body.repeatpassword;

        if(password === cpassword){
            const registerStudent = new Register({
                name : req.body.name,
                email : req.body.email,
                mobilenumber : req.body.mobilenumber,
                college : req.body.college,
                password : req.body.password,
                repeatpassword : req.body.password

            })


            const registered = await registerStudent.save();
            res.status(201).render("index");

        }else{
            res.send("password are not matching")
        }
    }catch(error){
        res.status(400).send(error);
    }
})

//login validation
app.post("/login", async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        
        if(useremail.password === password){
            res.status(201).render("index");
        }else{
            res.send("password is not matching");
        }

    }catch(error){
        res.status(400).send("invalid email id")
    }
})

//server create
app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})