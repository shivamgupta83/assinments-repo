const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//1
const createUser = async function (abcd, xyz) {

  try {
    let data = abcd.body;

    let { emailId, password } = abcd.body

    if (!emailId || !password) {
      xyz.status(400).send({ msg: "emailid or password is not present" })
    }

    let savedData = await userModel.create(data);

    xyz.status(201).send({ msg: savedData })
  }
  catch (error) {
    xyz.status(500).send({ msg: error.massage })
  }
};


//2
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (!userName || !password) {
      return res.status(400).send({
        status: false,
        msg: "username or the password is not present",
      });
    }

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(500).send({
        status: false,
        msg: "username or the password is not corerct",
      });


    let token = jwt.sign(
      {
        userId: user._id,
        batch: "lithium",
        organisation: "FUnctionUp",
      },
      "functionup-lithium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token })
  }
  catch (error) {
    res.status(500).send({ msg: error.massage })
  }
};


//3
const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(401).send({ status: false, msg: "No such user exists" });

    return res.status(200).send({ status: true, data: userDetails })
  }
  catch (error) {
    res.status(500).send({ msg: error.massage })
  }

};


//4
const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    if (!message) return res.status(401).send({ status: false, msg: 'havent message' })

    let user = await userModel.findById(req.params.userId)
    if (!user) return res.status(500).send({ status: false, msg: 'No such user exists' })

    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

    //return the updated user document
    return res.status(200).send({ status: true, data: updatedUser })
  }
  catch (error) {
    return res.status(500).send({ msg: error.massage })
  }
}

//5
const updateUser = async function (req, res) {

  try {
    if (!req.body) {
      return res.status(401).send("there is no body");
    }

    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(500).send("No such user exists");
    }

    let userData = req.body;  //in user data is { "posts": "hii01"  }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(201).send({ status: updatedUser })
  }
  catch (error) {
    res.status(500).send({ msg: error.massage })
  }
};


// delete user
const deleteuser = async function (req, res) {

  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(500).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
    res.status(201).send({ status: updatedUser })
  }
  catch (error) {
    res.status(500).send({ msg: error.massage })
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteuser = deleteuser

