// Requiring express in the project
const express = require("express");
const { blogs } = require("./model/index");
const app = express()


// Import database
require("./model/index")
 

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

app.post("/createblog",async (req,res) =>{
    // Selecting the data from form input in website
    // First approach
    const title = req.body.title
    const subtitle = req.body.subtitle
    const description = req.body.description
    
    //Second Approach
    // const {title, subtitle, description} = req.body
    console.log(title, subtitle, description)

    // put data into database
    res.send("Your blog has been successfully submitted.")
    // For sending the input data into blogs database
    await blogs.create({   // await needs async i.e. takes some time to put data into db
        title : title,
        subtitle : subtitle,
        description : description
    })
})



// Creating the server to start on the localhost: 3000
app.listen(3000, function(){
    console.log("Server is running in port 3000.")
})