import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Catalog from './catalog/Catalog.jsx'
import Card from './card/Card.jsx'
import New from './new/New.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Catalog />
  },
  {
    path: "/products/:id",
    element: <Card />
  },
  {
    path: "/new",
    element: <New />
  },
  {
    path: "*",
    element: <Navigate to={"/products"} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
