const{studentReg} = require('./student.controller');
const router = require('express').Router();

router.post('/studentReg', studentReg); // http://localhost:8000/api/student/studentReg
module.exports = router;