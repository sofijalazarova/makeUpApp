import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const fetchProductDetails = async () => {
      try{
        const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
        setProduct(response.data);
      } catch(error){
        console.log("Error occured while fetching product details");
      }
    };

    fetchProductDetails();
  }, [id]);


  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <>
 
    <section className="relative w-full h-auto min-h-screen mx-auto content-center justify-items-center pt-20 bg-white">
        <div className="mx-auto lg:mx-28 h-auto lg:h-[500px] flex flex-col lg:flex-row items-center p-5">
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-5 lg:mb-0">
            <img className="object-fill h-60 w-60 lg:h-96 lg:w-96" src={product.image_link} alt={product.name} />
          </div>
          <div className="w-full lg:w-1/2 h-full px-5">
            <h1 className="heroFont text-3xl lg:text-5xl pt-5 text-start pb-3">{product.name}</h1>
            <h1 className="text-base lg:text-xl text-start">{product.description}</h1>
            <div className="mt-3 flex flex-wrap justify-start">
              {product.product_colors.map((color, index) => (
                <div key={index} className="flex items-center mr-2 mb-2">
                  <div className="w-6 h-6 rounded-full mr-1" style={{ backgroundColor: color.hex_value }}></div>
                  <div className="text-sm">{color.colour_name}</div>
                </div>
              ))}
            </div>
            <h1 className="text-4xl lg:text-6xl text-start mt-3">${product.price}</h1>
            <div className="flex justify-start">
              <button onClick={() => window.location.href = `${product.website_link}`} className="w-full lg:w-1/2 py-3 lg:py-5 my-5 px-8 text-lg lg:text-2xl text-white font-bold shadow-md shadow-primary outline bg-black">
                Buy product
              </button>
            </div>
          </div>
        </div>
    </section>


       
    </>
  )
}

export default ProductDetails;