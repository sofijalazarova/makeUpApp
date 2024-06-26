import { BrowserRouter, HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products';
import HomePage from './pages/HomePage';
import ProductDetails from './components/ProductDetails';
import ExclusiveProduct from './components/ExclusiveProduct';
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  
  return (         
    // <Router>
    //   <div className="relative z-0">
    //     <div>
    //       <Navbar/>
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/products" element={<Products />} />      
    //       <Route path="/productDetails/:id" element={<ProductDetails />} />      
    //       <Route path="/heroProduct" element={<ExclusiveProduct />} />
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <div>
        <Navbar/>
        <Outlet />
      </div>
    </>
  )
}

export default App;
