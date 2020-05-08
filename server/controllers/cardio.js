const express = require('express');

const Excercise= require('../models/cardio');
const router = express.Router();

router
 
 .get("/",(req,res)=>res.send({
     Excercise:Excercise.List
 }))

 .post('/addEx',(req,res)=>res.send(excercise.addcard(req.body.workout)
 ))


 .post('/remove',(req,res)=>res.send(excercise.removecard(req.body.i)
 )
 )

 