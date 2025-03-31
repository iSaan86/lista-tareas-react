import React from 'react';

const VisualizadorProps = ({ nombre, edad }) => {
    return (
        <div>
            <h1>Nombre: {nombre}</h1>
            <p>Edad: {edad}</p>
        </div>
    );
}

export default VisualizadorProps;