const pool = require('../config/database');
module.exports = {
    checkstudentMail: (Email, callBack) => {
        pool.query(
            `select * from cftldb.students where Email = ?`,
            [
                Email
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    }
    ,
     checkstudentMail2 : (Email) => {
        return new Promise((resolve, reject) => {
          pool.query(
            `SELECT * FROM cftldb.students WHERE Email = ?`,
            [Email],
            (error, results) => {
              if (error) {
                reject(error);
              } else {
                resolve(results);
              }
            }
          );
        });
      },
    studentReg: (data, callBack) => {
        pool.query(
            `INSERT INTO cftldb.std_reg (Full_Name, Pre_Name, Name_in, DOB, Gender, NIC, Address, City, Pre_Scl, Medium, Aca_Year, Guardian, G_Name, G_Address, G_City, G_Work, G_NIC, Contact_Home, Contact_Num, Email,status)
             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.Full_Name,
                data.Pre_Name,
                data.Name_in,
                data.DOB,
                data.Gender,
                data.NIC,
                data.Address,
                data.City,
                data.Pre_Scl,
                data.Medium,
                data.Aca_Year,
                data.Guardian,
                data.G_Name,
                data.G_Address,
                data.G_City,
                data.G_Work,
                data.G_NIC,
                data.Contact_Home,
                data.Contact_Num,
                data.Email,
                'pending'
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },
    studentRealReg: (data, callBack) => {
        pool.query(
            `INSERT INTO cftldb.students (Full_Name, Pre_Name, Name_in, DOB, Gender, NIC, Address, City, Pre_Scl, Medium, Aca_Year, Guardian, G_Name, G_Address, G_City, G_Work, G_NIC, Contact_Home, Contact_Num, Email)
             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.Full_Name,
                data.Pre_Name,
                data.Name_in,
                data.DOB,
                data.Gender,
                data.NIC,
                data.Address,
                data.City,
                data.Pre_Scl,
                data.Medium,
                data.Aca_Year,
                data.Guardian,
                data.G_Name,
                data.G_Address,
                data.G_City,
                data.G_Work,
                data.G_NIC,
                data.Contact_Home,
                data.Contact_Num,
                data.Email
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error,null);
                }
                return callBack(null, results);
            }
        );
    },
     updatePassword : (Email, newPassword) => {
        return new Promise((resolve, reject) => {
          pool.query(
            `UPDATE cftldb.students SET pswd = ? WHERE Email = ?`,
            [newPassword, Email],
            (error, results) => {
              if (error) {
                reject(error);
              } else {
                resolve(results);
              }
            }
          );
        });
      }
}