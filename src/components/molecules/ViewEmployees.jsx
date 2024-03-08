import React from 'react';
import './ConsultProduct.css';

function ViewEmployees() {
    const users = [
        { id: 1, nombre: 'Jualia', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
        { id: 2, nombre: 'Juana', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
        { id: 3, nombre: 'Rosalia', contraseña:'password3423', turno:'Matutino', phone:'91912639393' },
    ];

    const handleUpdate = (productId) => {
        // Implementar lógica para actualizar el producto con el ID productId
    };

    const handleDelete = (productId) => {
        // Implementar lógica para eliminar el producto con el ID productId
    };

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del usuario</th>
                    <th>Contraseña</th>
                    <th>turno</th>
                    <th>Numero de contacto</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map(users => (
                    <tr key={users.id}>
                        <td>{users.id}</td>
                        <td>{users.nombre}</td>
                        <td>{users.contraseña}</td>
                        <td>{users.turno}</td>
                        <td>{users.phone}</td>
                        <td>
                            <button onClick={() => handleUpdate(product.id)}>Actualizar</button>
                            <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ViewEmployees;
