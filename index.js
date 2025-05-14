const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

const employerRoute=require('./routes/employer');
const userRoute=require('./routes/user');

async function main(){
await mongoose.connect(process.env.MONGO_URL);
console.log('db connected');

app.use(express.json()); //middleware to access body recieved from user
app.use('/employer',employerRoute);   //employer route
app.use('/user',userRoute);          //user route

app.listen(3000);

}
main();
