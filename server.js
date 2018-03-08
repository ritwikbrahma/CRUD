//app object created in app.js
var app = require('./app');
//setting the port
var port = process.env.port||4300;

var server = app.listen(port, function () {
    console.log("Express server listening on port"+port);
})
