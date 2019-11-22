const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/userController')

router.get('/user/get_users', user_controller.get_users)
router.get('/user/get_user/:id', user_controller.get_user)

router.get('/info/get_my_info', user_controller.get_my_answers)
router.get('/info/get_user_info/:id', user_controller.get_user_info)
router.put('/info/update_my_info', user_controller.update_my_info)

router.get('/sub/get_my_subscriptions', user_controller.get_my_subscriptions)
router.get('/sub/get_my_subscribers', user_controller.get_my_subscribers)
router.get('/sub/get_user_subscriptions/:id', user_controller.get_user_subscriptions)
router.get('/sub/get_user_subscribers/:id', user_controller.get_user_subscribers)
router.put('/sub/subscribe_to_user/:id', user_controller.subscribe_to_user)

router.get('/questions/get_my_questions_unanswered', user_controller.get_my_questions_unanswered)
router.get('/questions/get_my_questions_answered', user_controller.get_my_questions_answered)
router.get('/questions/get_tome_questions', user_controller.get_tome_questions)
router.get('/questions/get_my_answers', user_controller.get_my_answers)
router.get('/questions/get_user_answers/:id', user_controller.get_user_answers)
router.post('/questions/post_question/:id', user_controller.post_question)
router.put('/questions/add_answer/:id', user_controller.add_answer)

module.exports = router;
