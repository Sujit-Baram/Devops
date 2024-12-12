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
    } catch (error) {
      setError(error.message);
      console.log('Error:', error);
    }
  };
  
