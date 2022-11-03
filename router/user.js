const express = require('express');
const userRouter = express.Router();
const template = require('art-template');
const path = require('path');
var dateFormat = require("dateformat");
//导入学生信息集合
const Student = require('../model/user');
//给模板拼接路径
template.defaults.root = path.join(__dirname, '../views');
//向模板中导入变量
template.defaults.imports.dateFormat = dateFormat;
userRouter.get('/index', (req, res) => {
    // res.send("Ok");
    const html = template('register.art', {});
    res.send(html);
});
//注册路由
userRouter.post('/register', (req, res) => {
    // console.log(req.body);
    Student.create(req.body).then((results) => {
        // res.send(results);
        if (results != null) {
            //重定向
            res.writeHead('301', {
                Location: '/admin/list',
            });
            res.send();     
        };
    }).catch((err) => {
        console.log(err);
    });
    // res.send("OK");

});

//列表路由
userRouter.get('/list', (req, res) => {
    Student.find().then((results) => {
        const html = template('list.art', { user: results });
        res.send(html);
    })
});

module.exports = userRouter;