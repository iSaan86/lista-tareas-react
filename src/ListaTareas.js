import React, { useState } from 'react';
import VisualizadorProps from './VisualizadorProps';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, nombre: 'Aprender React', fecha: '2025-04-01', completada: false },
    { id: 2, nombre: 'Hacer ejercicio', fecha: '2025-04-02', completada: true }
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return; // Evita agregar tareas vacías

    const nueva = {
      id: Date.now(),
      nombre: nuevaTarea,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
      completada: false
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea(''); // Limpia el input después de agregar la tarea
  };

  const completarTarea = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div>

      {/* Input para escribir una nueva tarea */}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      {/* Renderizar la lista de tareas */}
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <VisualizadorProps {...tarea} />
          <button onClick={() => completarTarea(tarea.id)}>
            {tarea.completada ? 'Desmarcar' : 'Completar'}
          </button>
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ListaTareas;
