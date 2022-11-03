const express = require('express');
const app = express();
app.get('/api', (req, res) => {
  res.send('欢迎来到小毛接口服务')
});
app.get('/api/index', (req, res) => {
  res.send('index打开了')
})
app.get('/api/user', (req,res)=> {
  res.send({
    username: '张三',
    age:18
  })
})
module.exports=app