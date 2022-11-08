const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {

 //check the token in request header
    //validate this token
// verify identity
 const header=req.headers["x-auth-token"]
if(!header) res.send({msg:"token is not present in header"}) 

 let decodedToken = jwt.verify(header, "functionup-lithium");

if (!decodedToken)
  return res.send({ status: false, msg: "token is invalid" });
        
 next()
         
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    const header=req.headers["x-auth-token"]

    let decodedToken = jwt.verify(header, "functionup-lithium");

 
 //userId for the logged-in user
if(req.params.userId!=decodedToken.userId){ return res.send({ status: false, msg: "token is invalid" }) }

    next()
}
module.exports  = {authorise,authenticate};