const express  = require("express")
const bodyParser = require('body-parser');
const route  = require("./router/router")
const {default : mongoose} = require("mongoose")
const app = express()
 

app.use(bodyParser.json())
 

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/backend-engineering-project",{
    useNewUrlparser : true
})
.then(()=> console.log("mongoDb is connected"))
.catch((err) => console.log(err))

app.use("/",route)

app.listen(3000,function(){
    console.log("server started Port "+3000)
})