const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bookmeet = require("./models/bookmeet.model")
const feedback = require("./models/feedback.model")


const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/techy")

app.use(cors())
app.use(express.json())

app.post('/api/bookmeet', async(req,res)=>{
    console.log("registering meeting...")
    try{await bookmeet.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    })
    res.send({status:"ok", message:"Meeting Registered Successfully. We'll reach out shortly."})
}
    catch(err){
        res.send({status:"error",message:"An error has occurred. Please try again later."})
    }

})

app.post('/api/feedback',async(req,res)=>{
    console.log("registering feedback data...")
    try{await feedback.create({
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback,
    })
    res.send({status:"ok", message:"Your feedback has been noted. Thank you for your valuable inputs!"})
}
    catch(err){
        res.send({status:"error",message:"An error has occurred. Please try again later."})
    }

})

app.listen(3000,()=>{
    console.log("Server started...")
})