const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express();


const connectionParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
console.log("connected!")
})
