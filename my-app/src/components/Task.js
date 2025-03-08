import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the task item and its elements
const TaskItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: ${props => (props.isDone ? '#d4edda' : '#f8d7da')};
`;

const TaskDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TaskName = styled.span`
  font-weight: bold;
`;

const TaskDescription = styled.span`
  font-style: italic;
`;

const Button = styled(motion.button)`
  padding: 10px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Component to display and manage a single task
const Task = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskDetails, setTaskDetails] = useState({ ...task });

  // Toggle task completion status
  const handleToggle = () => {
    toggleTaskCompletion(task.id);
  };

  // Confirm and delete task
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      deleteTask(task.id);
    }
  };

  // Enable editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  // Save updated task details
  const handleSave = () => {
    updateTask(taskDetails);
    setIsEditing(false);
  };

  return (
    <TaskItem isDone={task.isDone} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={taskDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={taskDetails.description}
            onChange={handleInputChange}
          />
          <Button onClick={handleSave} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Save</Button>
        </div>
      ) : (
        <TaskDetails onClick={handleToggle}>
          <TaskName>{task.name}</TaskName>
          <TaskDescription>{task.description}</TaskDescription>
        </TaskDetails>
      )}
      <div>
        <Button onClick={handleEdit} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Edit</Button>
        <Button onClick={handleDelete} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Delete</Button>
        <Button onClick={handleToggle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {task.isDone ? 'Mark Incomplete' : 'Mark Complete'}
        </Button>
      </div>
    </TaskItem>
  );
};

export default Task;
