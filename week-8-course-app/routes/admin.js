const {Router} =require("express");
const adminRouter = Router();
const AdminModel = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET="admin123";

adminRouter.post("/signup",  async function(req, res)
  {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name; 
   await AdminModel.create(
    {
     email:email,
     password:password,
     name:name
    })
    json.send({
      message:"you are signup!"
    })
  })

adminRouter.post("/signin", function(req,res)
  {
    const email = req.body.email;
    const password = req.body.password;
    const response = AdminModel.findOne({
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



adminRouter.post("/course", function(req ,res)
{

})

adminRouter.get("/course", function(req ,res)
{
  
})

adminRouter.get("/courses", function(req ,res)
{
  
})

adminRouter.put("/course", function(req ,res)
{
  
})


module.exports={adminRouter}



