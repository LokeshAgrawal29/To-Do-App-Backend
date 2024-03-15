const mongoose=require('mongoose');
 require('dotenv').config();

const dbconnect =()=>{
mongoose.connect(process.env.DATABASE_URL,{}) 
    .then(() => {
        console.log("Database connection succesful");
        
    }).catch((err) => {
        console.log("Database connection Failed");
        console.log(err);
    });
}

module.exports = dbconnect;
