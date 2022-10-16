
let aaj=new Date()
let day=aaj.getDate()
let month=aaj.getMonth()
let year=aaj.getFullYear()

function date(){
    console.log(day)
    console.log(month)
    console.log(year)
    return "done3"
}

 

function batc(a,b,c){
console.log(`my batch name is ${a},my weak is ${b},today topic is ${c}`)
return "done2"
}
module.exports.yy=date
module.exports.batch=batc