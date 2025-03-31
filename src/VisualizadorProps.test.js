import { render, screen } from '@testing-library/react';
import VisualizadorProps from './VisualizadorProps';

test('Muestra correctamente la tarea', () => {
  render(<VisualizadorProps nombre="Tarea de prueba" fecha="2025-04-01" completada={false} />);
  expect(screen.getByText(/Tarea de prueba/)).toBeInTheDocument();
  expect(screen.getByText(/2025-04-01/)).toBeInTheDocument();
});
