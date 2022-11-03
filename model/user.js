const mongoose = require('mongoose');

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
const Student=mongoose.model('Student', studentSchema);

//将学生信息集合进行导出
module.exports = Student;