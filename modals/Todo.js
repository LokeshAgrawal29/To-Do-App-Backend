const mongoose=require('mongoose');
 const Todoschema = mongoose.Schema(
    {
        Title:{
            type:String,
            required:true,
            maxlength:50,
        },
        Description:{
            type:String,
            required:true,
            maxlength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        
    }
 )
 module.exports =mongoose.model('Todo',Todoschema);