const express =require('express')
const mongoose =require('mongoose')
const Product=require('./models/ProductModel')
const app = express ()


//routes
app.get('/',(req ,res)=>{
   res.send('hello Node APi') 
})

app.use(express.json())//r
app.use(express.urlencoded({extended:true}))//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
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
//get product by id
app.get('/product/:id', async(req,res)=>{
    const{id}=req.params
    try{
       const product= await Product.findById(id)
       res.status(200).json(product)
    }catch(error){
res.status(500).json({message: error.message})
    }

})
//update product by id

app.put('/product/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:'can not find product'})
        }
        const updatedProduct =await Product.findById(id)
        res.status(200).json(updatedProduct)
    }catch(error){
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