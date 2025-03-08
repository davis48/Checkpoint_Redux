// Action to add a new task
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

// Action to update an existing task
export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task
});

// Action to delete a task by its ID
export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

// Action to toggle the completion status of a task by its ID
export const toggleTaskCompletion = (taskId) => ({
  type: 'TOGGLE_TASK_COMPLETION',
  payload: taskId
});

// Action to sort tasks by a specified order
export const sortTasks = (order) => ({
  type: 'SORT_TASKS',
  payload: order
});

// Action to sort tasks by their due date
export const sortTasksByDueDate = () => ({
  type: 'SORT_TASKS_BY_DUE_DATE'
});
