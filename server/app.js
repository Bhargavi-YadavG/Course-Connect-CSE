const express = require("express")

const app = express()


app.get("/welcome",(req,res)=>{
    res.send("Welcome Back")
})
app.listen(3000, ()=>{
    console.log("listening to the PORT")
})