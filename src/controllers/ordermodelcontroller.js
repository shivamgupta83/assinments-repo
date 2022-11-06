const orderModel = require("../models/ordermodel")
const productModel = require("../models/productmodel")
const UserModel = require("../models/usermodel2")
const { isValidObjectId } = require("mongoose")

const createorder = async function (req, res) {

    let { userid, productid } = req.body

    let header = req.headers["isfreeappuser"]
    const headers = header.toLowerCase() == 'true' ? true : false


    if (!userid || !productid) {
        res.send({ saveddata: "user id or product id is not present" })
    }

    if (!isValidObjectId(userid) || !isValidObjectId(productid)) {
        res.send({ saveddata: "userid  or productid  is not valid " })
    }


    const product = await productModel.findById(productid)
    const user = await UserModel.findById(userid)


    //product and user is present
    if (!product || !user) {
        res.send({ saveddata: "user  or product  is not present" })
    }





    if (!headers) {

        if (product.price > user.balance) {
            res.send({ saveddata: "user dont have proper balance" })
        }


        else if (product.price <= user.balance) {

            let totalbalance = user.balance - product.price
            let saved = await UserModel.findOneAndUpdate({ _id: user._id }, { balance: totalbalance }, { new: true })

            let create = {
                userid: user._id,
                productid: product._id,
                amount: product.price,
                isFreeAppUser: false
            }

            let order = await orderModel.create(create)
            res.send({ saveddata: saved, msgOrder: order })
        }



    }

    else if (headers) {

        let create = {
            userid: user._id,
            productid: product._id,
            amount: 0,
            isFreeAppUser: true
        }

        let order = await orderModel.create(create)
        res.send({ saveddata: saved, msg: order })
    }


}


//get orderdata by populete and ref
const getorderdata = async function (req, res) {

    const data = await orderModel.find().populate("productid").populate("userid")
    res.send({ msg: data })
}


module.exports = { createorder, getorderdata }