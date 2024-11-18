import { API_URL } from "../../envs";
import { ILogin } from "@/interfaces/ILogin";
import { IRegister } from "@/interfaces/IRegister";

export const userRegister = async (data: IRegister) => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  return res.json();
};

export const userLogin = async (data: ILogin) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  return res.json();
};
