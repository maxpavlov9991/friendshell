const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    auth: {
        login: String,
        password: String,
        jwt: {
            stkey: String,
            ndkey: String
        }
    },

    info: {
        name: String,
        birthday: Date,
        register: Date,
        email: String
    },
    
    sub: {
        subscriptions: [ String ], 
        subscribers: [ String ]
    },

    questions: {
        my: [ String ], 
        tome: [ String ]
    },
    
},
{
    timestamp: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User
