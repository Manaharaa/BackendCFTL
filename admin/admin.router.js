const{login,viewRegStudents,viewStudents,getStudentById,studentRealReg } = require('./admin.controller');
const router = require('express').Router();

router.post('/login', login);
router.get('/viewRegStudents', viewRegStudents);
router.get('/viewStudents', viewStudents);
router.post('/getStudentById', getStudentById);
router.post('/studentRealReg', studentRealReg);
module.exports = router;
