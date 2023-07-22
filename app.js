
const express = require('express');
const cors = require('cors');
const app = express();
const adminRouter = require('./admin/admin.router');
const studentRouter = require('./student/student.router');

app.use(cors());
app.use(express.json());
app.use('/api/admin', adminRouter);
app.use('/api/student', studentRouter);
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
    }
);