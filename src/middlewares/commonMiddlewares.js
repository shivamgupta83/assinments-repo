
const mid1= function ( req, res, next) {
    const header=req.headers["isfreeappuser"]
    if(header=="true" || header == "false"){
     
        next()
      
     }
    else {
        res.send({msg:"header is not present"})
       }
         
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const myMiddleware = function(req, res, next){
    req.month = "November"
    console.log('I am inside a middleware!')
    next()
}

const myOtherMiddleware = function(req, res, next){
    // Setting an attribute 'wantsJson' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    let acceptHeaderValue = req.headers["accept"]

    if(acceptHeaderValue == "application/json") {
        req.wantsJson = true
    } else {
        req.wantsJson = false
    }
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.myMiddleware = myMiddleware
module.exports.myOtherMiddleware = myOtherMiddleware
