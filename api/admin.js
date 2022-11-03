//导入用户路由模块
const express = require('express');
const userRouter = express.Router();
userRouter.get('/index', (req, res) => {
  res.send("二级路由Ok");
});

module.exports = userRouter