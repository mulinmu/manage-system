const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
Router.get('/list', function(req,res){
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})
Router.post('/register', function(req, res){
    const {user, pwd} = req.body
    User.findOne({user}, function(err, doc){
        if(doc){
            return res.status(200).json({code:1, msg: '用户名重复'})
        }
        User.create({user, pwd}, function(e,d){
            if(e){
                return res.json({code: 1, msg: '后端出错了'})
            }
            return res.json({code: 0})
        })
    })
})

Router.get('./info', function(req, res){
    return res.json({code: 1})
})

module.exports = Router