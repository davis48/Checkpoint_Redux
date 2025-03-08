import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the form and its elements
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Input = styled(motion.input)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled(motion.button)`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Component to add a new task
const AddTask = ({ addTask }) => {
  const [taskDetails, setTaskDetails] = useState({ name: '', description: '', dueDate: '', dueTime: '' });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDetails.name.trim() && taskDetails.description.trim()) {
      addTask({ id: Date.now(), ...taskDetails, isDone: false });
      setTaskDetails({ name: '', description: '', dueDate: '', dueTime: '' });
    }
  };

  return (
    <Form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Input
        type="text"
        name="name"
        placeholder="Task Name"
        value={taskDetails.name}
        onChange={handleInputChange}
        required
      />
      <Input
        type="text"
        name="description"
        placeholder="Task Description"
        value={taskDetails.description}
        onChange={handleInputChange}
        required
      />
      <Input
        type="date"
        name="dueDate"
        value={taskDetails.dueDate}
        onChange={handleInputChange}
      />
      <Input
        type="time"
        name="dueTime"
        value={taskDetails.dueTime}
        onChange={handleInputChange}
      />
      <Button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Add Task</Button>
    </Form>
  );
};

export default AddTask;
