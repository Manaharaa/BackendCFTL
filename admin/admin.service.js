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
            `SELECT * FROM cftldb.std_reg`,
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
  }