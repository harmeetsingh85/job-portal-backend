const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const userModel=require('../models/user');
const applicationModel=require('../models/application');
const jobModel=require('../models/job');

async function signUpController(req,res){
    let {name,email,password}=req.body;
    let hashPassword=await bcrypt.hash(password,10);
    await userModel.create({
        name:name,
        email:email,
        password:hashPassword
    })
    res.json({"msg":"user signup success"});

}
async function signInController(req,res){
    let {email,password}=req.body;
    let findedEmail=await userModel.findOne({email:email});
    let result=await bcrypt.compare(password,findedEmail.password);
    if(!result){
        return res.json({"msg":"invalid user signin credential"});
    }
    let token=jwt.sign({id:findedEmail._id},process.env.JWT_USER_KEY);
    res.json({"msg":"user login succcess",
        "token":token,
    });
}
async function jobsController(req,res){
    let jobs=await jobModel.find({});
    res.json(jobs);
}
async function applicationController(req,res){
    let jobid=req.body.id;
    await applicationModel.create({
        userid:req.id,
        jobid:jobid
    })
    res.json({"msg":"applied successfully"});
}

module.exports={signUpController,signInController,jobsController,applicationController};