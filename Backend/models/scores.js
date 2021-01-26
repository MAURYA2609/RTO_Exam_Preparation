var mongoose = require('mongoose');

var ScoresSchema = mongoose.Schema({
    username: { type: String, require: true },
    score: { type: String, require: true }
})


module.exports = mongoose.model('scores', ScoresSchema);