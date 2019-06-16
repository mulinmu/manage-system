const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/login'
mongoose.connect(DB_URL,  { useNewUrlParser: true })

const models = {
    user:{
        'user': {type: String, require: true},
        'pwd': {type:String, require: true}
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}

