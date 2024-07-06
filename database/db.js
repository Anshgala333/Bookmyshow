import mongoose from "mongoose";

const connectdb  = async function(){
    await mongoose.connect('mongodb://127.0.0.1/moviedb');
}


export default connectdb