//import express 
var express = require('express');
//initialize express
var app = express();

//database
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

//makes the "app" object visible to the rest of the program for when we call it using require
module.exports = app;




