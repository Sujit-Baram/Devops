import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError('');

    const studentData = { name, email };

    try {
      const response = await fetch('http://devops.sujitbaram.online/api/students/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Student submitted:', data);
      // Optionally, reset the form after successful submission
      setName('');
      setEmail('');
    } catch (error) {
      setError(error.message);
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Student Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Form;
