// TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
