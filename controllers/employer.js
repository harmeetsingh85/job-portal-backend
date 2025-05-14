const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');

const employerModel = require("../models/employer");
const jobModel=require("../models/job");

async function signUpController(req,res){
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    // console.log("password :   "+password);
    const saltRound=10;
    let hashPassword= await bcrypt.hash(password,saltRound);
    await employerModel.create({
        name:name,
        email:email,
        password:hashPassword
    })
    res.json({"msg":"employer signUp success"});

}

async function signInController(req,res){
    let email=req.body.email;
    let password=req.body.password;
    let findedEmail=await employerModel.findOne({email:email});
    console.log(findedEmail);
    let finded=await bcrypt.compare(password,findedEmail.password);
    if(!finded){
        return res.json({"msg":"pls signUp first"});
    }
    let token=jwt.sign({id:findedEmail._id},process.env.JWT_EMPLOYER_KEY);
    res.json({"msg":"login success","token":token});

}
async function createJobController(req,res){
    let {title, description, company, salary, location}=req.body;
    let createdBy=req.id;
    await jobModel.create({title,description, company, salary, location,createdBy});
    res.json({"msg":"job created successfully"});
}
async function deleteJobController(req,res){
    let title=req.body.title;
    await jobModel.findOneAndDelete({title:title});
    res.json({"msg":"deleted successfully"});
}

async function viewJobController(req,res){
    let jobs=await jobModel.find({createdBy:req.id});
    if(!jobs){
        return res.json({"msg":"you did not created jobs"});
    }
    res.json(jobs);
}
module.exports={signUpController,signInController,createJobController,deleteJobController,viewJobController};