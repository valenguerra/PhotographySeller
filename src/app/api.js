import axios from "axios";

const URL = process.env.STRAPI_URL;

export const getProducts = async () => {
  const res = await axios.get(URL + "/products");
  return res.data;
};

export const getProduct = async id => {
  if (!id) return;
  const res = await axios.get(URL + `/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(URL + "/categories");
  return res.data;
};

export const getColorFilters = async () => {
  const res = await axios.get(URL + "/color-filters");
  return res.data;
};

export const getFrames = async () => {
  const res = await axios.get(URL + "/frames");
  return res.data;
};
