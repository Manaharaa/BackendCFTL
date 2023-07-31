const{studentReg,checkstudentMail} = require('./student.controller');
const router = require('express').Router();

router.post('/studentReg', studentReg); // http://localhost:8000/api/student/studentReg
router.post('/checkstudentMail', checkstudentMail); // 
module.exports = router;