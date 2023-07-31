const{login,viewRegStudents,viewStudents,getStudentById,studentRealReg,updateStudentStatus,viewRejectStudents,teacherReg,
    viewTeachers,removeTeacher,getDeletedTeachers,getStudentEmailById,viewCourseFees,handleUpdateCourseFees,courseRegOl,courseRegAl,studentDistrict ,getStudentDistrictsFromDB, getStudentCounts} = require('./admin.controller');
const router = require('express').Router();

router.post('/login', login);
router.get('/viewRegStudents', viewRegStudents);
router.get('/viewStudents', viewStudents);
router.post('/getStudentById', getStudentById);
router.post('/studentRealReg', studentRealReg);
router.post('/updateStudentStatus', updateStudentStatus);
router.get('/viewRejectStudents', viewRejectStudents);
router.post('/teacherReg', teacherReg);
router.get('/viewTeachers', viewTeachers);
router.post('/removeTeacher', removeTeacher);
router.get('/getDeletedTeachers', getDeletedTeachers);
router.post('/getStudentEmailById', getStudentEmailById);
router.get('/viewCourseFees', viewCourseFees);
router.post('/updateCourseFees', handleUpdateCourseFees);
router.post('/courseRegOl', courseRegOl);
router.post('/courseRegAl', courseRegAl);
router.get('/studentDistrict', studentDistrict);
router.get('/getStudentDistrictsFromDB', getStudentDistrictsFromDB);
router.get('/getStudentCounts', getStudentCounts);
module.exports = router;
