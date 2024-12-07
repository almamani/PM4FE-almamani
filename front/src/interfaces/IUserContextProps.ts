import { IUser } from "./IUser";
import { IOrder } from "./IOrder";

export interface IUserContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateOrders: (order: IOrder) => void;
}
