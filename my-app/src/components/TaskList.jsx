import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleUpdateTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleUpdateTaskStatus={handleUpdateTaskStatus}
        />
      ))}
    </ul>
  );
};

export default TaskList;
