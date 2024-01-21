import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState(''); 

  const handleAdd = () => {
    if (task.trim() === '') {
      // Check if task is empty or contains only whitespace
      alert('Task cannot be empty!');
      return;
    }

    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {
        setTask('');
        // location.reload();
        // Clear the textbox after successful submission
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
