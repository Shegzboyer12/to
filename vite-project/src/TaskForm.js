// TaskForm.js

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      addTask({
        id: uuidv4(),
        name: taskName,
        description: taskDescription,
        completed: false
      });
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border border-gray-300 px-2 py-1 mr-2"
      />
      <input
        type="text"
        placeholder="Task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="border border-gray-300 px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
