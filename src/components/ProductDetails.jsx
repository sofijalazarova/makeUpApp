import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        setProduct(response.data);
      } catch (error) {
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
      <section className="relative content-center w-full h-auto min-h-screen pt-20 mx-auto bg-white justify-items-center">
        <div className="mx-auto lg:mx-28 h-auto lg:h-[500px] flex flex-col lg:flex-row items-center p-5">
          <div className="flex items-center justify-center w-full mb-5 lg:w-1/2 lg:mb-0">
            <img
              className="object-fill h-60 w-60 lg:h-96 lg:w-96"
              src={product.image_link}
              alt={product.name}
            />
          </div>
          <div className="w-full h-full px-5 lg:w-1/2">
            <h1 className="pt-5 pb-3 text-3xl heroFont lg:text-5xl text-start">
              {product.name}
            </h1>
            <h1 className="text-base lg:text-xl text-start">
              {product.description}
            </h1>
            <div className="flex flex-wrap justify-start mt-3">
              {product.product_colors.map((color, index) => (
                <div key={index} className="flex items-center mb-2 mr-2">
                  <div
                    className="w-6 h-6 mr-1 rounded-full"
                    style={{ backgroundColor: color.hex_value }}
                  ></div>
                  <div className="text-sm">{color.colour_name}</div>
                </div>
              ))}
            </div>
            <h1 className="mt-3 text-4xl lg:text-6xl text-start">
              ${product.price}
            </h1>
            <div className="flex justify-start">
              <Button
                onClick={() =>
                  (window.location.href = `${product.website_link}`)
                }
              >
                Buy product
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
