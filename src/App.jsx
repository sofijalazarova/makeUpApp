import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products';
import HomePage from './pages/HomePage';
import ProductDetails from './components/ProductDetails';
import ExclusiveProduct from './components/ExclusiveProduct';

const App = () => {
  
  return (         
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />      
          <Route path="/productDetails/:id" element={<ProductDetails />} />      
          <Route path="/heroProduct" element={<ExclusiveProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
