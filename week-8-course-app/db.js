const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb+srv://yogeshknit99:Vc61xC4APTvCVAWG@cluster0.vbzst.mongodb.net/course-app");
console.log("db connected!");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const  userSchema = new  Schema(
 {
  email: {type: String ,unique:true},
  password:String ,
  firstname :String ,
  lastname: String ,
 } 
)
const adminSchema =new Schema({
  email: {type: String ,unique:true},
  password:String ,
  firstname :String ,
  lastname: String ,
})

const courseSchema =new Schema({
  title: String,
  description: String,
  price:Number,
  imageUrl:String,
  creatorId:ObjectId,
})

const purchaseSchema =new Schema({
  userId:ObjectId,
  courseId:ObjectId,
})

const UserModel = mongoose.model("user",userSchema);
const AdminModel = mongoose.model("admin",adminSchema);
const CourseModel = mongoose.model("courses",courseSchema);
const PurchaseModel = mongoose.model("purchase",purchaseSchema);


module.exports={
UserModel,
AdminModel,
CourseModel,
PurchaseModel
};