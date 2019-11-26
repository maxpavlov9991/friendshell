const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    auth: {
        login: String,
        password: String
    },

    info: {
        email: String,
        name: String,
        reg_date: Date,
        birthday: Date,
        sub: {
            subscriptions: [String],
            subscribers: [String]
        },
        questions: {
            my: [String],
            tome: [String]
        },
    },
},
    {
        timestamp: true
    })

const User = mongoose.model('User', UserSchema)

module.exports = User