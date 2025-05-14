const jwt=require('jsonwebtoken');

function employerauth (req,res,next){
    let token=req.headers.token;
    console.log(token);
    let response=jwt.verify(token,process.env.JWT_EMPLOYER_KEY);
    console.log(response);
    if(!response){
        return res.json({"msg":"you are not authorized employer"});
    }
    req.id=response.id;
    next();
}
module.exports=employerauth;