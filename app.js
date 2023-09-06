// Requiring express in the project
const express = require("express")
const app = express()

// Setting the view engine for ejs to find the .ejs file by app.js
app.set("view engine", "ejs");

// Setting the form to take data from input or parse in tech terms
app.use(express.json());

app.use(express.urlencoded({extended : true})) 

// Code to respond to "/" => home page 
app.get("/", (req,res) => {
    res.render("home")
});

// respond to Create Blog Page
app.get("/createblog", (req,res) => {
    res.render("createBlog")
});

app.post("/createblog",(req,res) =>{
    console.log(req.body)
})



// Creating the server to start on the localhost: 3000
app.listen(3000, function(){
    console.log("Server is running in port 3000.")
})