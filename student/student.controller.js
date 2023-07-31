const {studentReg,checkstudentMail,} = require('./student.service');
module.exports = {
    studentReg: (req, res) => {
        const body = req.body;
        studentReg(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: 'Student registration successfully',
            });
        });
    },
    // checkstudentMail: (req, res) => {
    //     const { Email } = req.body;
    //     checkstudentMail(Email, (err, results) => {
    //       console.log(results);
    //       if (err) {
    //         console.log(err);
    //         return;
    //       }
    //       if (!results || results.length === 0) {
    //         return res.json({
    //           success: 0,
    //           message: 'Invalid email or password'
    //         });
    //       }
    //       return res.json({
    //         success: 1,
    //         data: results,
    //         message: 'Login successfully'
    //       });
    //     });
    //   },
    checkstudentMail: (req, res) => {
        const { Email, Password } = req.body;
      
        // Check if the user provides both email and password
        if (!Email || !Password) {
          return res.json({
            success: 0,
            message: 'Please provide both email and password'
          });
        }
      
        // If both email and password are provided, check the email in the database
        checkstudentMail(Email, (err, results) => {
          if (err) {
            console.log(err);
            return res.json({
              success: 0,
              message: 'An error occurred'
            });
          }
      
          if (results.length === 0 || !results) {
            // Email not found in the database
            return res.json({
              success: 0,
              message: 'Invalid email or password'
            });
          }
      
          // Compare the provided password with the password from the database
          if (Password !== results[0].pswd) {
            // Passwords do not match
            return res.json({
              success: 0,
              message: 'Invalid email or password'
            });
          }
      
          // Passwords match, user is authenticated
          return res.json({
            success: 1,
            data: results,
            message: 'Login successful'
          });
        });
      }
      
      
}