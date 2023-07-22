const {userlogin, viewRegStudents, viewStudents,getStudentById,deleteStudent} = require('./admin.service');
const {studentRealReg} = require('../student/student.service');
module.exports = {
    login: (req, res) => {
        const body = req.body;
        userlogin(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            if(!results){
                console.log(results);
                return res.status(401).json({
                    success: 0,
                    message: 'Invalid email or password',
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: 'Login successfully',
            });
        });
    },

    viewRegStudents: (req, res) => {
        viewRegStudents((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });


    },

    viewStudents: (req, res) => {
        viewStudents((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getStudentById: (req, res) => {
        const id = req.body.id;
        getStudentById(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    studentRealReg: (req, res) => {
        const id = req.body.id;
        getStudentById(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
        const values = results;

        studentRealReg(values, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            deleteStudent(id, (err, results) => {
                if(err){
                    console.log(err);
                    return;
                }
            });
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    )},
}
