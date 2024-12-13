const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST route to handle form submissions
router.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  
  try {
    const student = new Student({ name, email });
    await student.save();
    res.status(200).json({ message: 'Student submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit student details.' });
  }
});

// GET route to fetch all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(); // Find all student documents in the database
    res.status(200).json(students); // Send students as a response
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve students.' });
  }
});

module.exports = router;
