/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../service/useProducts";
import Search from "./Search";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSearchClick = async () => {
    if (searchVal === "") {
      const products = await getAllProducts();
      setAllProducts(products);
      return;
    }

    const filterBySearch = allProducts.filter((item) => {
      return item.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setProducts(filterBySearch);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const products = await getAllProducts();
        setAllProducts(products);
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        console.log("Error occurred while loading data: " + error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-bgcolor">
        <Search
          setSearchVal={setSearchVal}
          handleSearchClick={handleSearchClick}
        />
        <div className="flex items-center justify-center min-h-screen pt-10 pl-3 bg-bgcolor pb-28">
          <div className="flex flex-wrap justify-center gap-5">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
