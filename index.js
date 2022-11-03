const express = require('express');
const app = express();
const path = require('path');
//导入数据库连接
require('./model/connect');
 
//导入学生信息集合
const Student = require('./model/user');
//导入用户路由模块
const userRouter = require('./router/user');

//挂载静态资源
app.use(express.static(path.join(__dirname, 'public')));

//导入body-parser 解析器中间件
const bodyParser = require('body-parser');
// 解析 application/x-www-form-urlencoded 格式数据
app.use(bodyParser.urlencoded({ extended: false }));

//挂载一级路由
app.use('/admin', userRouter);
//挂载路由
app.use('/mao', (req, res) => {
    res.send('OK')
})

app.listen(3008, () => {
    console.log('server runing at http://127.0.0.1:3008');
})