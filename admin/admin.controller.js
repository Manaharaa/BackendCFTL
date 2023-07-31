const {userlogin, viewRegStudents, deletedTeacher,viewStudents,getStudentById,deleteStudent,updateStudentStatus,viewRejectStudents,teacherReg,
    viewTeachers,getTecherDetailsToMove,teacherDelete,getDeletedTeachers,getStudentEmailById,viewCourseFees,updateCourseFees,courseRegOl,courseRegAl,getStudentDistrictsFromDB, getStudentCounts} = require('./admin.service');
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
    },
    teacherReg: (req, res) => {
        const body = req.body;
        teacherReg(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'Teacher registered successfully'
            });
        });
    },
    viewTeachers: (req, res) => {
        viewTeachers((err, results) => {
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
    removeTeacher: (req, res) => {
        const ids = req.body.id;
      const  getTecherDetailsToMoves = (id, callBack) =>{
        getTecherDetailsToMove(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            const values = results;
            if(!results){
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            deletedTeacher(values, (err, results) => {
                if(err){
                    console.log(err);
                    return;
                }
                teacherDelete(id, (err, results) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                   
                  
                });
            });
        })
        
         
    }
    for (const id of ids) {
        getTecherDetailsToMoves(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
        });
      }
    return res.json({
        success: 1,
        message: 'Teacher removed successfully'
    });
},
    getDeletedTeachers: (req, res) => {
        getDeletedTeachers((err, results) => {
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
    getStudentEmailById: (req, res) => {
        const id = req.body.id;
        getStudentEmailById(id, (err, results) => {
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

    viewCourseFees: (req, res) => {
        viewCourseFees((err, results) => {
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
  
      // Route handler for updating course fees
 handleUpdateCourseFees : (req, res) => {
    const data = req.body;
  
    updateCourseFees(data, (err, message) => {
      if (err) {
        console.error(err);
        return res.json({
          success: 0,
          message: 'Failed to update course fees',
        });
      }
      return res.json({
        success: 1,
        message: 'Course fees updated successfully',
      });
    });
  },

   courseRegOl: (req, res) => {
        const body = req.body;
        courseRegOl(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'Course registered successfully'
            });
        });
    },

    courseRegAl: (req, res) => {
        const body = req.body;
        courseRegAl(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'Course registered successfully'
            });
        });
    },

    studentDistrict: (req, res) => {
        const body = req.body;
        studentDistrict(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'District registered successfully'
            });
        });
    },

    getStudentDistrictsFromDB: (req, res) => {
        getStudentDistrictsFromDB((err, results) => {
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

    getStudentCounts (req, res) {
        getStudentCounts((err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
      
          return res.json({
            data: results,
          });
        });
      }

}
