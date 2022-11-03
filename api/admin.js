//导入mongoose 
const mongoose = require('mongoose');
//连接数据库
// mongoose.connect('mongodb://itmao:123456@127.0.0.1:27017/Students', { useNewUrlParser: true })
//     .then(()=>console.log('mongodb数据库连接成功!'))
//     .catch((err)=>console.log('数据库连接失败！'));
mongoose.connect('mongodb+srv://itmao:maoyelin@cluster0.w6qcflo.mongodb.net/Students?retryWrites=true&w=majority')
.then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'));

//创建学生集合规则
const studentSchema = new mongoose.Schema({
  username: {
      type: String,
      minlength: 2,
      maxlength: 8,
      required: true,
  },
  age: {
      type: Number,
      min: 1,
      max: 30,
      required: true,
  },
  sex: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
  },
  hobbies: {
      type: [String],
      required: true,
  },
  college: {
      type: String,
      required: true,
  },
  enterdate: {
      type: Date,
      default: Date.now,//默认值
  }
});

//创建学生集合
const Student = mongoose.model('Student', studentSchema);
module.exports=(req, res) => {
  Student.find().then((results) => {
      res.send(results);
  })
}