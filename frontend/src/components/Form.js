import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/students', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '' });
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || 'Failed to submit'));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;
