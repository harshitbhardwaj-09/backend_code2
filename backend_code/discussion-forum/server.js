const express = require('express');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');
const forumRoutes = require('./routes/forumRoutes');
const seminarRoutes = require('./routes/seminarRoutes');

const app = express();

require('dotenv').config();

connectDB();

app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/seminar', seminarRoutes);

const PORT = process.env.PORT || 1001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
