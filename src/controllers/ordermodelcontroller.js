const orderModel = require("../models/ordermodel")
const productModel = require("../models/productmodel")
const UserModel = require("../models/usermodel2")

const createorder = async function (req, res) {
    let header = req.headers["isfreeappuser"]
    let dataproduct = req.body
    let userid = dataproduct.userid
    let productid = dataproduct.productid

    const product = await productModel.findById(productid)
    const user = await UserModel.findById(userid)
    const usertrue=user.isFreeAppUser

    if (product && user && header== "false") {

        if (product.price <= user.balance) {
            let totalbalance = user.balance - product.price
            let saved = await UserModel.findOneAndUpdate({ _id: user._id }, { balance: totalbalance }, { new: true })
             req.body.amount=product.price
            let order = await orderModel.create(req.body)
            res.send({ saveddata: saved ,msg :order  })
        }
        else if (product.price > user.balance){
            res.send({ saveddata: "you dont have enought balance" })
        }

    }

    else if (product && user && header == "true") {




             req.body.amount=0

 
        let order = await orderModel.create(dataproduct)
        console.log(order)
        console.log( req.body)
        res.send({ msg :order, user })

    }

}


//get orderdata by populete and ref
    const getorderdata = async function (req, res) {

        const data = await orderModel.find().populate("productid").populate("userid")
        res.send({ msg: data })
    }


    module.exports = { createorder, getorderdata }