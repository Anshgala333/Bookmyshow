import express from 'express';
import { insertTheatre , updatetheatre , selecttheatre ,addtheatrepage, deletetheatre } from '../../controller/admin/theatrecontroller.js';
const theatreRoute = express.Router()

theatreRoute
    .get("/", selecttheatre)
    .get("/add", addtheatrepage)
    .post("/", insertTheatre)
    .put("/", updatetheatre)
    .delete("/", deletetheatre)
   

export default theatreRoute