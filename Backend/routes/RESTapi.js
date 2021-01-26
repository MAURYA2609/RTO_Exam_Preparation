var bcrypt = require('bcrypt');
const express = require('express');
var User = require('../models/users');
var Question = require('../models/questions');
const Scores = require('../models/scores');
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

router.post('/addQuestion/:correct', (req, res) => {
    addQuestion(req, res);
});
async function addQuestion(req, res) {
    console.log("UTSAV");
    if(req.params.correct=='A'){
        answer=req.body.optionA;
    }
    else if(req.params.correct=='B'){
        answer=req.body.optionB;
    }
    else if(req.params.correct=='C'){
        answer=req.body.optionC;
    }
    else if(req.params.correct=='D'){
        answer=req.body.optionD;
    }
    var questions = new Question({
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        correct: answer,
    })

    questions.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
}

router.post('/questionList', function(req, res){
    console.log("Entering to get question List");
    Question.find({})
    .exec(function(err,questions){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            console.log(questions);
            res.json({
                ALLquestions: questions
            })
        }
    });
});

router.post('/testQuestions', function(req, res){
    
    Question.find()
    .exec(function(err,questions){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            res.json({
                quizquestions: questions
            })
        }
    });
})


router.post('/newScore/:username/:score', (req, res, next) => {
    addScore(req, res);
});
async function addScore(req, res) {
    var newscore = new Scores({
        username: req.params.username,
        score: req.params.score
    })

    newscore.save((error, addScore) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(addScore)
        }
    })
}

module.exports = router;