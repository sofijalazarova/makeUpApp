import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Products from './components/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/makeUpApp/",
    element: <App/>,
    children: [
      {
        path: "/makeUpApp/",
        element: <HomePage/>,
      },
      {
        path: "/makeUpApp/products/",
        element: <Products/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
