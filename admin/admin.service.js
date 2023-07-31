const pool = require('../config/database');
module.exports = {
    userlogin: (data, callBack) => {
        pool.query(
            `SELECT * FROM user WHERE email = ? AND password = ?`,
            [
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },

    viewRegStudents: (callBack) => {
        pool.query(
            `SELECT * 
            FROM cftldb.std_reg
            WHERE std_reg.status = 'pending'`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },

    viewStudents: (callBack) => {
        pool.query(
            `SELECT * FROM cftldb.students`,
            [],
            (error, results) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },
    getStudentById: (id, callBack) => {
        pool.query(
            `SELECT * FROM cftldb.std_reg WHERE Std_reg_ID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteStudent: (id, callBack) => {
        pool.query(
            `DELETE FROM cftldb.std_reg WHERE Std_reg_ID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateStudentStatus: (id, callBack) => {
        pool.query(
            `UPDATE cftldb.std_reg SET status = ? WHERE Std_reg_ID = ?`,
            [
                'rejected',
                 id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },
    
    viewRejectStudents: (callBack) => {
        pool.query(
            `SELECT * 
            FROM cftldb.std_reg
            WHERE std_reg.status = 'rejected'`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },

    teacherReg : (data, callBack) => {
        pool.query(
            `insert into cftldb.teachers(F_Name,L_Name,Gender,Marital_State,Address,District,Mobile,Email,Branch_Scl,Bank_Name,Accunt_No,Branch_Bank)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.fName,
                data.lName,
                data.gender,
                data.marital,
                data.address,
                data.district,
                data.mobile,
                data.email,
                data.branchScl,
                data.bank,
                data.accountNo,
                data.branchBank
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        )
    },
    viewTeachers : (callBack) => {
        pool.query(
            `SELECT * FROM cftldb.teachers`,
            [],
            (error, results) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },

    teacherDelete: (id, callBack) => {
        pool.query(
            `DELETE FROM cftldb.teachers WHERE Teacher_ID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getTecherDetailsToMove: (id, callBack) => {
        pool.query(
            `SELECT * FROM cftldb.teachers WHERE Teacher_ID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deletedTeacher : (data, callBack) => {
        pool.query(
            `insert into cftldb.deleted_teachers(F_Name,L_Name,Gender,Marital_State,Address,District,Mobile,Email,Branch_Scl,Bank_Name,Accunt_No,Branch_Bank)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.F_Name,
                data.L_Name,
                data.Gender,
                data.Marital_State,
                data.Address,
                data.District,
                data.Mobile,
                data.Email,
                data.Branch_Scl,
                data.Bank_Name,
                data.Accunt_No,
                data.Branch_Bank
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        )
    },
    getDeletedTeachers: (callBack) => {
        pool.query(
            `SELECT * FROM cftldb.deleted_teachers`,
            [],
            (error, results) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },
    getStudentEmailById : (id, callBack) => {
        pool.query(
            `SELECT Email FROM cftldb.std_reg WHERE Std_reg_ID = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results[0]);
            }
        )
    },

    viewCourseFees: (callBack) => {
        pool.query(
            `SELECT * FROM cftldb.course_fees`,
            [],
            (error, results) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },

    updateCourseFees : (data, callBack) => {
        const courses = data; // 'data' is already an array of course objects
      
        courses.forEach((course) => {
          pool.query(
            `UPDATE cftldb.course_fees SET monthly_fee = ? WHERE id = ?`,
            [course.monthly_fee, course.id],
            (error, results, fields) => {
              if (error) {
                console.error(error);
              }
            }
          );
        });
      
        return callBack(null, 'Course fees updated successfully');
      },

      courseRegOl : (data, callBack) => {
        pool.query(
            `insert into cftldb.ol_reg(time,sub1,sub2,sub3,sub4,sub5,sub6,sub7,sub8,sub9 )
            VALUES (?,?,?,?,?,?,?,?,?,?)`,
            [
                data.time,
                data.sub1,
                data.sub2,
                data.sub3,
                data.sub4,
                data.sub5,
                data.sub6,
                data.sub7,
                data.sub8,
                data.sub9
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        )
  },

  courseRegAl : (data, callBack) => {
    pool.query(
        `insert into cftldb.al_reg(time,stream,sub1,sub2,sub3 )
        VALUES (?,?,?,?,?)`,
        [
            data.time,
            data.stream,
            data.sub1,
            data.sub2,
            data.sub3,
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error,null);
            }
            return callBack(null, results);
        }
    )
  },

  getStudentDistrictsFromDB : (callBack) => {
    pool.query(
      `SELECT G_City, COUNT(*) as count 
      FROM cftldb.students 
      GROUP BY G_City`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error, null);
        }
        return callBack(null, results);
      }
    );
  },

 getStudentCounts(callBack) {
     query1 = `SELECT COUNT(*) AS al_reg_count FROM cftldb.al_reg`;
     query2 = `SELECT COUNT(*) AS ol_reg_count FROM cftldb.ol_reg`;
  
    pool.getConnection((error, connection) => {
      if (error) {
        return callBack(error, null);
      }
  
      connection.query(query1, (error, alRegResult) => {
        if (error) {
          connection.release();
          return callBack(error, null);
        }
  
        connection.query(query2, (error, olRegResult) => {
          connection.release();
          if (error) {
            return callBack(error, null);
          }
  
        studentCounts = {
            al_reg_count: alRegResult[0].al_reg_count,
            ol_reg_count: olRegResult[0].ol_reg_count,
          };
  
          return callBack(null, studentCounts);
        });
      });
    });
  }
}