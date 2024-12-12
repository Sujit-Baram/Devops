import React from 'react';
import './App.css';
import Form from './components/Form';  // Ensure Form.js is imported correctly

function App() {
  return (
    <div className="App">
      <h1>Welcome to Student Form</h1>
      <Form />  {/* Make sure the Form component is correctly rendered */}
    </div>
  );
}

export default App;
