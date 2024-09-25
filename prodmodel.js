let mongoose = require("mongoose")

let prodsch = new mongoose.Schema({
    "id":Number,
    "title":String,
    "price":{type:Number, required:true},
    "description":String,
    "category":String,
    "image":String,
    "sold": { type: Boolean, required:true },
    "dateOfSale": {type:Date}
})

let pm = mongoose.model("roxiler",prodsch)
module.exports = pm