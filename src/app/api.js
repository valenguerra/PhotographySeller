import axios from "axios";

const URL = process.env.STRAPI_URL;

export const getProducts = async () => {
  const res = await axios.get(URL + "/api/productos?populate=*");
  return res.data.data;
};

export const getProductsWithNoRelations = async () => {
  const res = await axios.get(URL + "/api/productos");
  return res.data.data;
};

export const getCategories = async () => {
  const res = await axios.get(URL + "/api/categories");
  return res.data.data;
};

export const getColorFilters = async () => {
  const res = await axios.get(URL + "/api/color-filters");
  return res.data.data;
};

export const getProduct = async id => {
  if (!id) return;
  const res = await axios.get(URL + `/api/productos/${id}?populate=*`);
  return res.data.data;
};

export const getFrames = async () => {
  const res = await axios.get(URL + "/api/frames?populate=*");
  return res.data.data;
};
