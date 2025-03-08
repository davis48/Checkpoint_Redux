import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { addTask, updateTask, deleteTask, toggleTaskCompletion } from './actions/taskActions';
import './App.css';

// Main App component
function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(task => dispatch(addTask(task)));
  }, [dispatch]);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask addTask={(task) => dispatch(addTask(task))} />
      <ListTask 
        tasks={tasks} 
        updateTask={(task) => dispatch(updateTask(task))} 
        deleteTask={(taskId) => dispatch(deleteTask(taskId))} 
        toggleTaskCompletion={(taskId) => dispatch(toggleTaskCompletion(taskId))} 
      />
    </div>
  );
}

export default App;
