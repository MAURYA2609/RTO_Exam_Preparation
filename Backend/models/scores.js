var mongoose = require('mongoose');

var ScoresSchema = mongoose.Schema({
    username: { type: String, require: true },
    score: { type: String, require: true },
    time : {type:Date , require:true}
})


module.exports = mongoose.model('scores', ScoresSchema);