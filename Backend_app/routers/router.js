const express = require('express')
const router = express.Router()
const book = require('../model/book')



router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            em:req.body.send.em,
            pass:req.body.send.pass,
            con:req.body.send.con,
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})
    console.log(b)
})

router.get('/getbreakfast', async(req,res)=>{
    
})


module.exports= router;