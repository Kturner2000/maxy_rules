const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Define routes
app.use('/api/tasks', checkJwt, require('./routes/tasks')); // Protect this route with JWT

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
