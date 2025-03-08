import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Task from './Task';

// Styled component for the task card
const Card = styled(motion.div)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

// Component to display a list of tasks within a card
const TaskCard = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
        ))}
      </ul>
    </Card>
  );
};

export default TaskCard;
