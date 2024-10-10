// importing express
const express = require("express");
const app= express();
app.use(express.json());

// const Router = express.Router;
const {Router} =  require("express"); // use router for routing the different domain
const userRouter = Router();
// importing jwt 
const jwt = require("jsonwebtoken");
const JWT_SECRET="user123";

userRouter.post("/signup",  async function(req, res)
  {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name; 
   await UserModel.create(
    {
     email:email,
     password:password,
     name:name
    })
    json.send({
      message:"you are signup!"
    })
  })

userRouter.post("/signin", function(req,res)
  {
    const email = req.body.email;
    const password = req.body.password;
    const response = UserModel.findOne({
      email: email,
      password:password
    })
    if(response)
    {
     const token = jwt.sign({
      id: response._id.toString()
     },JWT_SECRET)
    }
    else{
      res.status(403).json({
        message: "Incorrect credentials!"
    })
    }
  })


  userRouter.get("/purchase" ,function(req,res)
{

})


  module.exports={userRouter}
  