import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterCard from './FilterCard';
import TaskCard from './TaskCard';
import { sortTasks, sortTasksByDueDate } from '../actions/taskActions';

// Component to display and manage the list of tasks
const ListTask = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  // Handle sorting tasks by name
  const handleSort = (order) => {
    dispatch(sortTasks(order));
  };

  // Handle sorting tasks by due date
  const handleSortByDueDate = () => {
    dispatch(sortTasksByDueDate());
  };

  return (
    <div>
      <FilterCard setFilter={setFilter} handleSort={handleSort} handleSortByDueDate={handleSortByDueDate} />
      <TaskCard 
        tasks={filteredTasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
      />
    </div>
  );
};

export default ListTask;
