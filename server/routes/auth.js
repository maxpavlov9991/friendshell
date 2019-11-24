const express = require('express')
const router = express.Router()

const auth_controller = require('../controllers/authController')

router.post('/log_in', auth_controller.log_in)
router.post('/reg', auth_controller.reg)

module.exports = router;
