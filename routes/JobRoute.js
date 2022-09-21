const AJOB = require("../models/ApplyedJobSchema");
const Router = require("express");


const JobRoute = Router();

// add new todo
JobRoute.post("/addjob",(req,res)=>{
    const {userid,company,experiance,salary,img,role}=req.body;
    const job = new AJOB({userid,company,experiance,salary,img,role});
    job.save().then(()=>{
        res.status(200).send({message:"Job added successfully"});
    });
})

// get all jobs respective to userid
JobRoute.get("/all/:id", async(req,res)=>{
    const jobs = await AJOB.find({"userid":req.params.id});
    res.status(200).send(jobs);
});

JobRoute.get("/allpending/:id", async(req,res)=>{
    const todos = await Todo.find({$and: [{"id": req.params.id},
    {"todoStatus": "Pending"}]});
    res.status(200).send(todos);
});

//delete todo
JobRoute.delete("/delete/:id", async(req,res)=>{
    const data = await Todo.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "todo Deleted Succsessfully" });
})

//get single todo by id
JobRoute.get("/singletodo/:id",async(req,res)=>{
    const bestProduct = await Todo.find(req.params);
    res.status(200).send(bestProduct);
})

//update todo by id 
JobRoute.patch("/edit/:_id",async (req,res) => {
    const updated = await Todo.updateOne({"_id":req.params},{$set:{"todoTask":req.body.todoTask , "todoStatus":req.body.todoStatus, "todoTag":req.body.todoTag }});
    res.status(200).send(updated);
  }
);

module.exports=JobRoute;