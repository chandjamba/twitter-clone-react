import { Children, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

// Step 1  Create context 
export const AuthContext = createContext();


// Step 2 Create hook which return the value from useContext.
export const useAuthcontext = () => {
    return useContext(AuthContext);
};

export function AuthContextProvider({children}) {
    const [loggedInUser, setLoggedInUser] = useState();
    
return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}