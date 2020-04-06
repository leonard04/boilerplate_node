const error = require('../../helper/errors/index')
const criteria = require('../../helper/constant/disease')
const response = require('../../helper/response')

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

exports.postDiagnoseCov = async(req,res) =>{
    try {
        let hasil = criteria.covid19.batuk / sum(criteria.covid19)

        res.json(response.createResp(200,
            {
                batuk: hasil,
            }
        ))
        
    } catch {
        res.json(error[lang].unexpected_error)
    }
}