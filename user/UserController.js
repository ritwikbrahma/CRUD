var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./User');

//to create a new post
router.post('/', function (req, res) {
    User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        function (err, user) {
            if (err)
                return res.status(500).send("There was a problem adding the person to the database");
            res.status(200).send(user);
        });

});

//to get all the users in that database
router.get('/',function(req,res){
    User.find(function(err, users){
        if(err) return res.status(500).send("There was a problem retrieving the users");
        return res.status(200).send(users);
    });
});

//to get a particular user
router.get('/:id', function(req,res){

})

module.exports = router;