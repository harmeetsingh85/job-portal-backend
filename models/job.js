const mongoose=require('mongoose');
const employerModel=require('./employer');

const jobSchema=new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    company:{type:String, require:true},
    salary:{type:Number, require:true},
    location:{type:String},
    createdBy:{type:mongoose.Schema.ObjectId, require:true,ref:'employerModel'}
})

const jobModel=mongoose.model('job',jobSchema);

module.exports=jobModel;