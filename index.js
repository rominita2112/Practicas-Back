const express= require('express');
const app=express();
const dotenv=require('dotenv');
const Fibonacci= require('./fib.js');
dotenv.config();



app.get('/test',(req,res)=>{  
 let number=Fibonacci(20);
  res.status(200).send(number); 
 if(number===0){
   res.status(404).send("error");
 } else if(number===""){
    res.status(404).send("error");
 }
});

app.listen(process.env.PORT,()=>{
    console.log(`${process.env.MESSAGE} en ${process.env.PORT}`)
})