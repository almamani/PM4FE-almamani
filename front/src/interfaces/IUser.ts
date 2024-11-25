import { IOrder } from "./IOrder";

export interface IUser {
  login: boolean;
  user: UserData;
  token: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: Credential;
  orders: IOrder[];
}

interface Credential {
  id: number;
  password: string;
}
