const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    em:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    con:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('books', bookSchema)