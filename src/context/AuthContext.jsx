import { createContext, useContext } from "react";

// first step to create context.
export const AuthContext = createContext();
//second step is useContext by exporting hook from function as a return value.
export const useAuthContext = () => {
  return useContext(AuthContext);
};
//third step is to export provider component which accepts children and pass them to context provider.
export function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
