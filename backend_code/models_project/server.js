const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const projectRoutes = require('./routes/projectRoutes'); 

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/models_project', projectRoutes);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
