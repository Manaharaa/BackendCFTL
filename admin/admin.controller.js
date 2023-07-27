const {userlogin, viewRegStudents, viewStudents,getStudentById,deleteStudent,updateStudentStatus,viewRejectStudents} = require('./admin.service');
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
        const ids = req.body.ids; // Get the array of IDs from the request body
        
        // Define a function to handle the insertion for a single ID
        const insertStudent = (id, callBack) => {
          getStudentById(id, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            
            if (!results) {
              return res.json({
                success: 0,
                message: 'Record not found',
              });
            }
            const values = results;
    //   console.log(values[0].Std_reg_ID);
            studentRealReg(values, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              deleteStudent(id, (err, results) => {
                if (err) {
                  console.log(err);
                  return;
                }
              });
            //   return callBack(null, results);
            });
          });
        };
      
        // Loop through each ID in the array and perform the insertion
        for (const id of ids) {
            insertStudent(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
            });
          }
      
        return res.json({
          success: 1,
          message: 'Inserted all students',
        });
      },
    //   updateStudentStatus : (req, res) => {
    //     const body = req.body;
    //     updateStudentStatus(body, (err, results) => {
    //         if(err){
    //             console.log(err);
    //             return;
    //         }
    //         return res.json({
    //             success: 1,
    //             message: 'Status updated successfully'
    //         });
    //     });
    // },
    updateStudentStatus: (req, res) => {
        const ids = req.body.ids; // Get the array of IDs from the request body 
        // const status = req.body.status;
        // Define a function to handle the insertion for a single ID
        const updateStudent = (id, callBack) => {
                updateStudentStatus(id, (err, results) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                    return callBack(null, results);
                });
        
        };
        // Loop through each ID in the array and perform the insertion
        for (const id of ids) {
            updateStudent(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
            });
          }
        return res.json({
            success: 1,
            message: 'Updated all students',
        });
    },
    viewRejectStudents: (req, res) => {
        viewRejectStudents((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    

}
