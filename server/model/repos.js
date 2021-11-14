const mongoose=require('mongoose');

const schema=mongoose.Schema({
    username:String,
    data:Array
});

module.exports=mongoose.model('Repos',schema)