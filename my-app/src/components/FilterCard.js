import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the filter card and buttons
const Card = styled(motion.div)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #f9f9f9;
`;

const FilterButton = styled(motion.button)`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Component to display and manage task filters
const FilterCard = ({ setFilter, handleSort, handleSortByDueDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle filter visibility
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <FilterButton onClick={toggleOpen} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </FilterButton>
      {isOpen && (
        <div>
          <FilterButton onClick={() => setFilter('all')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>All</FilterButton>
          <FilterButton onClick={() => setFilter('done')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Done</FilterButton>
          <FilterButton onClick={() => setFilter('notDone')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Not Done</FilterButton>
          <FilterButton onClick={() => handleSort('asc')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Sort Ascending</FilterButton>
          <FilterButton onClick={() => handleSort('desc')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Sort Descending</FilterButton>
          <FilterButton onClick={handleSortByDueDate} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Sort by Due Date</FilterButton>
        </div>
      )}
    </Card>
  );
};

export default FilterCard;
