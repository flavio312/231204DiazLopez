import React from 'react';
import './ConsultProduct.css';

function ConsultProduct() {
    const products = [
        { id: 1, codigo: '001', nombre: 'Producto 1', stock: 10, precioCompra: 50, precioVenta: 100, seccion: 'A' },
        { id: 2, codigo: '002', nombre: 'Producto 2', stock: 20, precioCompra: 60, precioVenta: 120, seccion: 'B' },
        { id: 3, codigo: '003', nombre: 'Producto 3', stock: 30, precioCompra: 70, precioVenta: 140, seccion: 'C' },
    ];

    const handleUpdate = (productId) => {
        
    };

    const handleDelete = (productId) => {
    
    };

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio Compra</th>
                    <th>Precio Venta</th>
                    <th>Sección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.codigo}</td>
                        <td>{product.nombre}</td>
                        <td>{product.stock}</td>
                        <td>{product.precioCompra}</td>
                        <td>{product.precioVenta}</td>
                        <td>{product.seccion}</td>
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

export default ConsultProduct;
