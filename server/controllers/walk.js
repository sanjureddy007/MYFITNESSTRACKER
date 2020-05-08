const express = require('express');

const Excercise= require('../models/walk');
const router = express.Router();

router
 
 .get("/",(req,res)=>res.send({
     Excercise:Excercise.List
 }))

 .post('/addEx',(req,res)=>res.send(excercise.addwalk(req.body.workout)
 ))


 .post('/remove',(req,res)=>res.send(excercise.removewalk(req.body.i)
 )
 )

 