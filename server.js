const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect DB
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use single routes file
app.use('/api', require('./routes/mainRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
