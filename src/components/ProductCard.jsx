import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const { name, image_link } = product;

  return (
    <>
      <Link to={`/makeUpApp/productDetails/${product.id}`}>
        <div className="bg-white p-5 sm:w-[300px] w-[300px] rounded-md shadow-lg">
          <div className="relative w-full h-[210px]">
            <img
              src={image_link}
              alt="project_image"
              className="object-cover w-full h-full border-2 rounded-xl border-secondary"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-black font-bold text-[20px] text-center">
              {name}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
