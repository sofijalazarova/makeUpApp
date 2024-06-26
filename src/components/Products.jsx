import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const getAllProducts = async () => {
    try{
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        return response.data;
    } catch(error){
        throw new Error("Error occured while loading products");
    }
  }

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = async () => {
    if(searchVal === "") {
      const products = await getAllProducts();
      setAllProducts(products);
      return;
    }

    const filterBySearch = allProducts.filter((item) => {
      return item.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setProducts(filterBySearch);
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
        setProducts(products);
      } catch (error) {
        console.log('Error occurred while loading data: ' + error);
      }
    };

    fetchData();
  }, []);


  const ProductCart = ( { id, imagePath, name} ) => {
    return(
    
    <div key={id}  className='bg-white p-5 sm:w-[300px] w-[300px] rounded-md shadow-lg'>
            <div className='relative w-full h-[210px]'>
                <img
                    src={imagePath}
                    alt='project_image'
                              className='h-full w-full object-cover rounded-xl border-2 border-secondary'
                              onClick={() => {
                                console.log(id);
                                navigate(`/productDetails/${id}`);
                              }}
                />                                    
            </div>                 
            <div className='mt-5'>
                <h3 className='text-black font-bold text-[20px] text-center' onClick={() => {
                        navigate(`/productDetails/${id}`);
                    }}>{name}</h3>
                </div>                          
            </div>
    )
}


  return (
<>
<div className='bg-secondary'>
  
    <div className='max-w-md mx-auto pt-36 lg:pt-28'>
      <div className='relative'>
        <input onChange={e => setSearchVal(e.target.value)} className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500' placeholder="Search Bronzer, Eyeliner..."></input>
        <button onClick={handleSearchClick} class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>     
    </div>

  <div className='bg-secondary pb-28 pt-10 pl-3 flex justify-center items-center min-h-screen'>   
    <div className='flex flex-wrap gap-5 justify-center'>
      {
        products &&
          products.map((product) => (                           
            <ProductCart id={product.id} imagePath={product.image_link} name={product.name}/>                                                     
          ))
      }
    </div>
  </div>
  </div>
</>

  )
}

export default Products;