const error = require('../../helper/errors/index')
let lang = 'en'

exports.getUserById = async(req,res,next) => {
    try {
        // check if query id is numeric or not
        if(isNaN(req.params.id_user)) {
            res.json(error[lang].E0001)
        }

        // check db layer if user id is exist or not
        

        res.json({ok:"oke"})
    }
    catch {
        res.json(error[lang].E0000)
    }
}