import { API_URL, FALLBACK_MOCK } from "../../envs";
import { IProduct } from "@/interfaces/IProduct";
import productsMock from "@/mocks/productsMock";

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .catch(() => {
      return FALLBACK_MOCK ? productsMock : [];
    });
  return res as IProduct[];
};

export const getProductById = async (id: number): Promise<IProduct> => {
  const products = await getProducts();
  const productFind = products.find((product) => product.id === id);
  return productFind as IProduct;
};

export const getFeaturedProducts = async (): Promise<IProduct[]> => {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);
  return featuredProducts as IProduct[];
};
