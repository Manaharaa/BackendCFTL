checkstudentMail2 : (Email) => {
    const {studentReg,checkstudentMail,updatePassword,} = require('./student.service');
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

  },
   updatePasswordController : (req, res) => {
    const { Email, pwd } = req.body;
  
    // Check if the email exists in the database
    checkstudentMail(Email)
      .then((results) => {
        if (!results || results.length === 0) {
          return res.json({
            success: 0,
            message: 'Invalid email'
          });
        }
  
        // Assuming the current password is stored in the "pswd" field in the database
        const currentPassword = results[0].pswd;
        const newPassword = pwd;
  
        // Check if the current password is "abc"
        if (currentPassword === 'abc') {
          // Update the password to the new value
          updatePassword(Email, newPassword)
            .then(() => {
              return res.json({
                success: 1,
                message: 'Password updated successfully'
              });
            })
            .catch((error) => {
              console.error('Error updating password:', error);
              return res.status(500).json({
                success: 0,
                message: 'Failed to update password'
              });
            });
        } else {
          // If the current password is not "abc", do not update the password
          return res.json({
            success: 0,
            message: 'Current password does not match "abc"'
          });
        }
      })
      .catch((error) => {
        console.error('Error checking email:', error);
        return res.status(500).json({
          success: 0,
          message: 'An error occurred'
        });
      });
  },
}
}