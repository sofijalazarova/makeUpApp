import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Products from './components/Products.jsx';
import ExclusiveProduct from './components/ExclusiveProduct.jsx';
import ProductDetails from './components/ProductDetails.jsx';


//<Route path="/productDetails/:id" element={<ProductDetails />} /> 

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
        path: "/makeUpApp/products",
        element: <Products/>,
      },
      {
        path: "/makeUpApp/heroProduct",
        element: <ExclusiveProduct/>,
      },
      {
        path: "/makeUpApp/productDetails/:id",
        element: <ProductDetails/>,
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
