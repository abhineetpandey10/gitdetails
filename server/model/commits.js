const mongoose=require('mongoose');

const schema=mongoose.Schema({
    username:String,
    repository:String,
    data:Array
});

module.exports=mongoose.model('Commits',schema)