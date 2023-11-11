const express =require('express')
const mongoose =require('mongoose')
const Product=require('./models/ProductModel')
const app = express ()


//routes
app.get('/',(req ,res)=>{
   res.send('hello Node APi') 
})

app.use(express.json())
app.get('/blog',(req,res)=>{
    res.send('hello Blog My is new')
})

//get all Products
app.get('/products',async(req,res)=>{

    try{
const products= await Product.find({})
res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})

    }
})

// add a product 
app.post('/product',async(req,res)=>{
try{
const product= await Product.create(req.body)
res.status(200).json(product)
}catch(error){
console.log(error.message);
res.status(500).json({message:error.message})
}
    
    console.log(req.body,'response')
    res.send(req.body)
})
app.listen(3000, ()=>{
    console.log('Node API app is running on port 3000')
})
mongoose.connect('mongodb+srv://admin:asland2125@cluster0.daq8ybp.mongodb.net/Node-API?retryWrites=true&w=majority').then(()=>{
    console.log('connected to MongoDB server');
}).catch((error)=>{
    console.log(error,'error connecting to MongoDB server')
})