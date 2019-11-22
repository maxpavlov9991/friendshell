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

/* GET my info */
exports.get_my_info = (req, res) => {
    req.params.id
}

/* GET user info by id */
exports.get_user_info = (req, res) => {
    //req.params.id
}

/* PUT my info */
exports.update_my_info = (req, res) => {
    
}

/****************************************************************************/
// SUB
/****************************************************************************/

/* GET my subscriptions list */
exports.get_my_subscriptions = (req, res) => {

}

/* GET my subscribers list */
exports.get_my_subscribers = (req, res) => {

}

/* GET user subscriptions list by id */
exports.get_user_subscriptions = (req, res) => {
    //req.params.id
}

/* GET user subscribers list by id */
exports.get_user_subscribers = (req, res) => {
    //req.params.id
}

/* POST user to my subscriptions by id (and update his subsribers list) */
exports.subscribe_to_user = (req, res) => {
    //req.params.id
}


/****************************************************************************/
// QUESTIONS (ANSWERS)
/****************************************************************************/

/* GET my 'my:' questions 'answered: false' */
exports.get_my_questions_unanswered = (req, res) => {

}

/* GET my 'my:' questions 'answered: true' */
exports.get_my_questions_answered = (req, res) => {

}

/* GET my tome-questions 'answered: false' list */
exports.get_tome_questions = (req, res) => {
    
}

/* GET my tome-questions 'answered: true' list */
exports.get_my_answers = (req, res) => {
    
}

/* GET user tome-questions 'answered: true' list by id*/
exports.get_user_answers = (req, res) => {
    //req.params.id
}

/* POST question to user by id (update my questions and user 'tome' question list */ 
exports.post_question = (req, res) => {
    //req.params.id
}

/* PUT(UPDATE question) question ANSWER by id (update my answers)*/
exports.add_answer = (req, res) => {
    //req.params.id
}