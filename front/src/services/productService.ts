import products from "@/mocks/products";

export const getProducts = () => {
  return products;
};

export const getProductById = (id: number) => {
  const productFind = products.find((product) => product.id === id);
  return productFind;
};
