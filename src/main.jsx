import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Menu from './pages/Main/Menu';
import Productos from './pages/Products/Productos';
import NuevoProducto from './pages/Form/NuevoProducto';
import Empleados from './pages/Employees/Empleados';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>
  },{
    path: 'productos',
    element: <Productos/>
  },{
    path:'nuevo-producto',
    element:<NuevoProducto/>
  },{
    path:'empleados',
    element: <Empleados/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
