import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError('');

    const studentData = { name, email };

    try {
      const response = await fetch('http://localhost:4000/api/students/submit', {  // Correct backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      const data = await response.json();
      console.log('Student submitted:', data);
    } catch (error) {
      setError(error.message);
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>DevOps Training Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Form;

