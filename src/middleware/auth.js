const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {

 //check the token in request header
    //validate this token
// verify identity
try{

    if (!req.params.userId)
    return res.status(401).send({ status: false, msg: "userId is not present" });

    const header=req.headers["x-auth-token"]
    if(!header) res.status(401).send({msg:"token is not present in header"}) 
    
     let decodedToken = jwt.verify(header, "functionup-lithium");
    
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" });
            
     next()
}
catch(err){
    res.status(500).send({msg:err.massage})
}
 
         
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    
 //userId for the logged-in user
try {

    const header=req.headers["x-auth-token"]

    let decodedToken = jwt.verify(header, "functionup-lithium");

    if(req.params.userId!=decodedToken.userId){ return res.status(403).send({ status: false, msg: "token is invalid" }) }

    next()
}
catch(error){
res.status(500).send({msg:error["massage"]})
    }
}
module.exports  = {authorise,authenticate};