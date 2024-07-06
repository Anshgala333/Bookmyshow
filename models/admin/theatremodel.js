import mongoose from "mongoose";
const Schema = mongoose.Schema;


const theatreSchema = new Schema({
 
  name: {
    type : String,
    unique : true,
  }
 
});

const theatreModel = mongoose.model('theatres', theatreSchema);

export default theatreModel
