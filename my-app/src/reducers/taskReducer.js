const initialState = [];

// Reducer to manage the state of tasks
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add a new task to the state
    case 'ADD_TASK':
      return [...state, action.payload];
    // Update an existing task in the state
    case 'UPDATE_TASK':
      return state.map(task => task.id === action.payload.id ? action.payload : task);
    // Delete a task from the state by its ID
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    // Toggle the completion status of a task by its ID
    case 'TOGGLE_TASK_COMPLETION':
      return state.map(task => task.id === action.payload ? { ...task, isDone: !task.isDone } : task);
    // Sort tasks by name in ascending or descending order
    case 'SORT_TASKS':
      return [...state].sort((a, b) => {
        if (action.payload === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    // Sort tasks by their due date
    case 'SORT_TASKS_BY_DUE_DATE':
      return [...state].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    // Return the current state if no action matches
    default:
      return state;
  }
};

export default taskReducer;
