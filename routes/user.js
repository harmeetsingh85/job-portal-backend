const express=require('express');
const userRoute=express.Router();

const {signUpController,signInController,jobsController,applicationController}=require('../controllers/user');
const userauth=require('../middlewares/userauth');

userRoute.post('/signUp',signUpController);
userRoute.post('/signIn',signInController);
userRoute.get('/jobs',jobsController);
userRoute.post('/apply',userauth,applicationController);

module.exports=userRoute;