import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lista de Tareas title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Lista de Tareas/i);
  expect(titleElement).toBeInTheDocument();
});
