const express = require('express');
const app = express();
//导入body-parser 解析器中间件
const bodyParser = require('body-parser');
// 解析 application/x-www-form-urlencoded 格式数据
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  res.send('欢迎来到小毛接口服务')
});
app.get('/api/index', (req, res) => {
  res.send({
    msg: 'get请求成功',
    data:req.query
  })
})
app.post('/api/index', (req,res)=> {
  res.send({
    msg: '请求成功',
    status: 200,
    data:req.body
 })
})
module.exports=app