var bcrypt = require('bcrypt');
const express = require('express');
var User = require('../models/users');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("from APP");
});

router.post('/signup', (req, res, next) => {
    console.log("register post");
    addToDB(req, res);
});
async function addToDB(req, res) {

    User.findOne({username:req.body.username},(err,user)=>{
        if(user){
            res.send(false)
        }
        else {
            var user = new User({
                username: req.body.username,
                email: req.body.email,
                password: User.hashPassword(req.body.password)
        
            })
          
            user.save(function(error) {
                if (error) {
                    console.log(error)
                }
                res.send(true)
            })
        }
    });
}

router.post('/login', function(req, res) {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            console.log("in error");
            console.log(err);
            res.json({
                msg: "Error"
            })
        } else {
            if (!user) {
                res.json({
                    msg: "Invalid Username"
                })
            } else {
                bcrypt.compare(req.body.password, user.password).then(match => {
                        if (match) {
                            console.log("success");

                            res.status(200).json({
                                msg: "Login successfull"
                            })
                        } else {
                            console.log("incorrect password");
                            console.log(req.body.username);
                            res.json({
                                msg: "Incorrect Password"
                            })
                        }
                    }).catch(err => {
                        console.log("Something went wrong");
    
                        res.json({
                            msg: "Something went wrong"
                        })

                    })
            }
        }
    })
});



module.exports = router;