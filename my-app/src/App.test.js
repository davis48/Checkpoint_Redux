import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders To-Do List title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/To-Do List/i);
  expect(linkElement).toBeInTheDocument();
});
