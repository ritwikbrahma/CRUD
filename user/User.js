
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
});

//binding the layout of the schema to the model called as user
mongoose.model('User',UserSchema);
module.exports = mongoose.model('User');