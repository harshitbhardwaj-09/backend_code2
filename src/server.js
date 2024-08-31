

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');


const app = express();


connectDB();


app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/models_project', require('./routes/projectRoutes')); 
app.use('/api/seminar', require('./routes/seminarRoutes')); 
app.use('/api/chat',require('./routes/chatRoutes'));
;
app.use('/api/forum',  require('./routes/forumRoutes'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
