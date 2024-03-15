const express=require('express');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT || 4000 ;

//middleware to parse json body
app.use(express.json());
// routes leke ana h

const todoroutes=require("./routes/todos");
app.use('/api/v1',todoroutes);

//server started 
app.listen(PORT,()=>
{
    console.log(`server is started ${PORT}` );
})

//DB connection
const dbconnect =require('./config/database');
dbconnect(); 

//default route 
app.get('/',(req,res)=>
{
    res.send('<h1> This is Home Page <h1>');
})