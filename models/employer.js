const mongoose=require('mongoose');

const employerSchema=new mongoose.Schema({
    name:String,
    email:{type:String, require:true},
    password:{type:String,require:true}
})
const employerModel=mongoose.model('employe',employerSchema);

module.exports=employerModel;