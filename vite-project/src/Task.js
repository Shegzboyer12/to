// Task.js

import React, { useState } from 'react';

const Task = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask({
      ...task,
      name: editedName,
      description: editedDescription
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(task.name);
    setEditedDescription(task.description);
  };

  return (
    <div className={`border border-gray-300 p-2 mb-2 ${task.completed ? 'bg-gray-200' : ''}`}>
      {!isEditing ? (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <div>
            <button onClick={handleEdit} className="mr-2 text-blue-500 hover:text-blue-600">
              Edit
            </button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border border-gray-300 px-2 py-1 mr-2"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border border-gray-300 px-2 py-1 mr-2"
          />
          <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded mr-2">
            Save
          </button>
          <button onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
