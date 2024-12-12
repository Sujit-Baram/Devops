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

module.exports = router;
