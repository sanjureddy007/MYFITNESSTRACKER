const express = require('express');

const Excercise= require('../models/sleep');
const router = express.Router();

router
 
 .get("/",(req,res)=>res.send({
     Excercise:Excercise.List
 }))

 .post('/addEx',(req,res)=>res.send(excercise.addsleep(req.body.workout)
 ))


 .post('/remove',(req,res)=>res.send(excercise.removesleep(req.body.i)
 )
 )

 