var mongoose = require('mongoose');

var QuestionsSchema = mongoose.Schema({
    que: { type: String, require: true },
    op1: { type: String, require: true },
    op2: { type: String, require: true },
    op3: { type: String, require: true },
    ans: { type: Number, require: true },
    hasImg: { type: Boolean, require: true },
    imgurl: { type: String}
})


module.exports = mongoose.model('questions', QuestionsSchema);