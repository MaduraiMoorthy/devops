const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;


app.get("/",(req,res)=> {
    res.send("Hi sathya");
})

const server = app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})

module.exports = {app ,server}