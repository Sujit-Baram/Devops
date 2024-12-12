const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');

const app = express();

// Middleware
app.use(cors());  // Allow CORS for all origins
app.use(bodyParser.json());  // Parse JSON bodies

// Routes
app.use('/api/students', studentRoutes);  // Route for students

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/devops_students', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => console.log('Backend running on http://localhost:4000'));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
