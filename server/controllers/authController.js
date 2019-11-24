/************************************************************************************************/
/* Schemas (Models) */
const UserModel = require('../models/User')

/************************************************************************************************/


/****************************************************************************/
// Log In
/****************************************************************************/

/* Check login and password in database */
exports.log_in = async (req, res) => {
    const reqBody = req.body
    const user = await UserModel.findOne({ auth: {login: reqBody.login, password: reqBody.password }})
    if(user){
        res.json(user)
    } else {
        res.json({ ok: false, message: 'not found'})
    }
}

exports.reg = async (req, res) => {
    const reqBody = req.body
    user = new UserModel({ auth: { login: reqBody.login, password: reqBody.password }, info: { email: reqBody.email }})
    const bdData = await user.save()
    res.json(bdData)
}