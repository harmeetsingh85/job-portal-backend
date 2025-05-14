const express=require('express');
const employerRoute=express.Router();
//import controller functions
const {signUpController,signInController,createJobController,deleteJobController,viewJobController}=require('../controllers/employer');
const employerauth=require("../middlewares/employerauth");

employerRoute.post('/signUp',signUpController);
employerRoute.post('/signIn',signInController);
employerRoute.post('/createJob',employerauth,createJobController);
employerRoute.delete('/deleteJob',employerauth,deleteJobController);
employerRoute.get('/viewMyJobs',employerauth,viewJobController);

module.exports=employerRoute;
