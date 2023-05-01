mongodb.js
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/hbs")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",LoginSchema)
module.exports=collection
