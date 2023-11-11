const express =require('express')
const mongoose =require('mongoose')
const app = express ()

//routes
app.get('/',(req ,res)=>{
   res.send('hello Node APi') 
})


app.get('/blog',(req,res)=>{
    res.send('hello Blog My is new')
})
app.listen(3000, ()=>{
    console.log('Node API app is running on port 3000')
})
mongoose.connect('mongodb+srv://admin:asland2125@cluster0.daq8ybp.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
    console.log('connected to MongoDB server');
}).catch((error)=>{
    console.log(error,'error connecting to MongoDB server')
})