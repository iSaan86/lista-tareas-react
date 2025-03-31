import React from 'react';

const VisualizadorProps = ({ nombre, fecha, completada }) => {
    return (
        <div style={{ 
          border: '1px solid gray', 
          padding: '10px', 
          margin: '10px', 
          backgroundColor: completada ? '#d4edda' : '#f8d7da'
        }}>
          <h3>{nombre}</h3>
          <p>Fecha: {fecha}</p>
          <p>Estado: {completada ? 'Completada ✅' : 'Pendiente ❌'}</p>
        </div>
      );
}

export default VisualizadorProps;