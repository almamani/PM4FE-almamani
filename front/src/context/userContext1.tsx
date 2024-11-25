"use client";
import { IUser } from "@/interfaces/IUser";
import { createContext, useState, useEffect } from "react";

// Creando interfaces
interface UserContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

//Crear Contexto
export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

//Crear Provider
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Dentro del provider generar estados, funciones código
  // El user
  const [user, setUser] = useState<IUser | null>(null);
  //Dentro del provider generar useEffects que sincronicen estados y local storage.
  //User cambia en el login, en ese punto, actualizamos el localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  //Luego, en cada render traemos el user del localStorage hacia user para sincronizarlo y persistir
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);
  //Retornar dentro del provider todo lo que quiera compartir
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
