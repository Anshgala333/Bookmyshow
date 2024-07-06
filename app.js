import express from "express";
import theatreRoute from "./routes/admin/theatreroute.js";
import connectdb from "./database/db.js";
import bodyParser from "body-parser";
import signuproute from "./routes/client/signuproute.js";

// console.log(process.env.PORT);
connectdb().then(()=>console.log("connected db"))
.catch(err=>console.log(err))


const app = express()

app.use(bodyParser.urlencoded())
app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

app.use('/theatre', theatreRoute)
app.use("/client" , signuproute)


app.listen(process.env.PORT)