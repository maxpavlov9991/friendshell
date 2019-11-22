/************************************************************************************************/
/* Schemas (Models) */
const UserModel = require('../models/User')
const QuestionModel = require('../models/Question')
/************************************************************************************************/



/****************************************************************************/
// USER
/****************************************************************************/

/* GET list of all users */
exports.get_users = (req, res) => {
    
}

/* GET user by id */
exports.get_user = (req, res) => {
    //req.params.id

}

/****************************************************************************/
// INFO
/****************************************************************************/

/* GET user info by id */
exports.get_user_info = (req, res) => {
    //req.params.id
}

/****************************************************************************/
// SUB
/****************************************************************************/

/* GET user subscriptions list by id */
exports.get_user_subscriptions = (req, res) => {

}

/* GET user subscribers list by id */
exports.get_user_subscribers = (req, res) => {

}

/****************************************************************************/
// QUESTIONS (ANSWERS)
/****************************************************************************/

/* POST question to user by id (update my questions and user 'tome' question list */ 
exports.post_question = (req, res) => {
    //req.params.id
}


