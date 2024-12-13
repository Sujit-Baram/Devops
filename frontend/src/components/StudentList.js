import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {students.length > 0 ? (
          students.map((student, index) => (
            <li key={index}>{student.name} - {student.email}</li>
          ))
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
}

export default StudentList;
