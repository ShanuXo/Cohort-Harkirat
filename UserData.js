const express=require("express");

const app=express();

//middleware
app.use(express.json());

const users =[{
    Name :"Shanu",
    Kidneys:[{
        healthy : false,
        // disease : "fever",
    },
    {
        healthy:true,
        // disease :"cold", 
    }]
}];

//GET
//Query parameter
app.get("/",function(req,res)
{
    //write logic 
    const johnKidneys=users[0].Kidneys;
    let numberOfKidney = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for(let i=0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].healthy)
        {
            numberOfHealthyKidney=numberOfHealthyKidney + 1;
        }        
    }
    const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        johnKidneys,
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    });
})

//POST
//Usually we send data in body;

app.post("/",function(req,res)
{
    const isHealthy=req.body.isHealthy;
    // const  kidneyDisease=req.body.kidneyDisease;
    users[0].Kidneys.push({
        healthy : isHealthy
        // disease : kidneyDisease
    });
    res.json({
        messgae:"Done!"
    });
})

//PUT
app.put("/",function(req,res)
{
    for(let i=0;i<users[0].Kidneys.length;i++)
    {
        users[0].Kidneys[i].healthy=true;
    }
    res.json({});
})

//DELETE

app.delete("/",function(req,res)
{
    const newKidney=[];
    for(let i=0;i<users[0].Kidneys.length;i++){
        if(users[0].Kidneys[i].healthy)
        {
            newKidney.push(
                {
                    healthy:true
                }
            )
        }
    }
    users[0].Kidneys=newKidney;
    res.json({
        message:"Done!"
    })
})


app.listen(3001);