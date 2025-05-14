const mongoose=require('mongoose');
const applicationSchema=new mongoose.Schema({
    userid:{type:mongoose.Schema.ObjectId, require:true},
    jobid:{type:mongoose.Schema.ObjectId, require:true}
})
const applicationModel=mongoose.model('application',applicationSchema);

module.exports=applicationModel;