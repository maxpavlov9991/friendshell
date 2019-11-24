/************************************************************************************************/
/* Schemas (Models) */
const UserModel = require('../models/User')

/************************************************************************************************/


/****************************************************************************/
// Log In
/****************************************************************************/

/* Check login and password in database */
exports.login = (req, res) => {
  try {
    const { login, password } = req.body
    UserModel.findOne({ auth: { login: login, password: password } }, 'info', (err, obj) => {
      if (err) {
        res.json({
          success: false,
          message: err.message
        })
      }
      if (obj) {
        res.json({
          success: true,
          message: 'Successfuly!',
          body: obj
        })
      } else {
        res.json({
          success: false,
          message: 'Incorrect login or password!'
        })
      }

    })
  } catch (err) {
    res.json({
      success: false,
      message: err.message
    })
  }

}


exports.register = (req, res) => {
  try {
    const { login, email, password } = req.body
    UserModel.findOne({
      $or: [{
        'auth.login': login // Надо сделать так чтобы он проверял не весь auth а лишь его часть
      }, {
        'info.email': email
      }
      ]
    }).exec((err, user_check) => {
      if (err) {
        res.json({
          success: false,
          message: err.message
        })
      }
      if (user_check) {
        res.json({
          success: false,
          message: 'This login or email is already exist!'
        })
      } else {
        const user = new UserModel({ auth: { login: login, password: password }, info: { email: email } })
        user.save((err, obj) => {
          if (err) {
            res.json({
              success: false,
              message: err.message
            })
          } else {
            res.json({
              success: true,
              message: 'Successfuly!',
              body: {
                info: obj.info,
                _id: obj.id
              }
            })
          }
        })
      }
    })
  } catch (err) {
    res.json({
      success: false,
      message: err.message
    })
  }
}
