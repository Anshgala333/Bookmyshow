import express from 'express';
import { loginform , signupaction , signupform , loginaction } from '../../controller/client/signupcontroller.js';
const signuproute = express.Router()

signuproute
    .get("/signup", signupform)
    .get("/login", loginform)
    .post("/signup", signupaction)
    .post("/login", loginaction)
    
   

export default signuproute