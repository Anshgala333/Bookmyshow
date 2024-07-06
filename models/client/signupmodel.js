import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userschema = new Schema({
 
  
  username: String,
  usermobile: Number,
  useremail: String,
  userpassword: String

});

const usermodel = mongoose.model('users', userschema);

export default usermodel
