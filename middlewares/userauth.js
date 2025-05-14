const jwt=require('jsonwebtoken');

function userauth(req,res,next){
    let token=req.headers.token;
    console.log("hi");
    let verifiedObject=jwt.verify(token,process.env.JWT_USER_KEY);
    if(!verifiedObject){
        return res.json({"msg":"u are not authoriized user, pls login"});
    }
    req.id=verifiedObject.id;
    console.log("user auth  passed");
    next();
}

module.exports=userauth;