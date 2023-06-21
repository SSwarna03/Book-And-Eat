const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
const cors = require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/Book&Eat')
  .then(() => console.log('Connected!'));
const app = express()


app.use(cors())
app.use(express.json())
app.use('/', router)

 const Sch= new mongoose.Schema({
  fname:String,
  lname:String
 });

// app.post("/details/add/",(req,res)=>{
//   const name=req.body.name
//   const price=req.body.price
// })

const Users=mongoose.model('Users',Sch);



app.post('/breakfast',(req,res)=>
{
  const collection=db.get('Breports');
  collection.insert(
    {
      fname:req.body.fname,
      lname:req.body.lname
    }
  )

})













app.listen(5000, ()=>console.log('The Server is running'))


