const error = require('../../helper/errors/index')
const criteria = require('../../helper/bobot/covid')

let lang = 'en'

function sum(obj){
    var sum = 0
    for(var e in obj){
        if(obj.hasOwnProperty(e)){
            sum += parseFloat(obj[e])
        }
    }
    return sum;
}
exports.postDiagnoseCov = async(req,res,next) =>{
    try {
        let hasil = criteria.batuk / sum(criteria)

        res.json({batuk: hasil})
        
    } catch {
        res.json(error[lang].E0000)
    }
}