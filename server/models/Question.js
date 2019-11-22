const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({

    destination: String,
    text: String,
    date: Date,
    answered: Boolean,
    answer: {
        text: String,
        date: Date
    }
    
},
{
    timestamp: true
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
