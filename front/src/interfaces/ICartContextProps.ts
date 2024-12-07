import { IProduct } from "./IProduct";

export interface ICartContextProps {
  cart: IProduct[];
  setCart: (cart: IProduct[]) => void;
  cleanCart: () => void;
}
