const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// Add a new student
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = new Student({ name, email });
    await newStudent.save();
    res.status(201).json({ message: 'Student saved successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: 'Error saving student' });
    }
  }
});

module.exports = router;
