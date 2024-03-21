//Creating an http server -Using Express

const express = require("express");

const app=express();

const calculateSum = (n) =>{
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum+=i;
    }
    return sum;
}

app.get("/", function(req,res)
{
    const n= req.query.n;//to catch an query input we are using query
    const ans=calculateSum(Number(n));
    res.send("Sum of N numbers"+ ans);
})

app.listen(3001);