export const baseUrl = "https://ecommercev01.pythonanywhere.com/";

export const getCategory = () => {
  return fetch(`${baseUrl}product/categories/`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const getProduct = () => {
  return fetch(`${baseUrl}product/list/`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
