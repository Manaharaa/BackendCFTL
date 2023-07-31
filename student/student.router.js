const{studentReg,checkstudentMail,updatePasswordController} = require('./student.controller');
const router = require('express').Router();

router.post('/stupdatePasswordControllerudentReg', studentReg); // http://localhost:8000/api/student/studentReg
router.post('/checkstudentMail', checkstudentMail);
router.post('/updatePassword', updatePasswordController);
module.exports = router;