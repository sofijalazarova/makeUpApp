import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Error occured while loading products");
  }
};
