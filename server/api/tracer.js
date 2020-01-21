const tracer = require('../tracer');
const fs = require('fs');
const express = require('express');

let router = express.Router();

router.get('/', function(req,res){
    res.sendFile("index");
});

router.post('/', function(req,res){
    let age = req.body.age;
    res.end("Your data has been saved");

});

module.exports = app;