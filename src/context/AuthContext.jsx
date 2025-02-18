import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../lib/appwrite/services/auth.service";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export function AuthContextProvider({ children }) {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");
  // if url contains /verifyEmail then check of user session exist  if not send to login page else check email verified is false if its false do not navigate anywhere let the page open
  useEffect(() => {
    async function checkUserSession() {
      const currentUser = await authService.getCurrentUser();
      // To do : need to optimize these all conditions.
      if (
        location.pathname.startsWith("/verify-email") &&
        currentUser &&
        currentUser.emailVerification &&
        (!userId || !secret)
      ) {
        navigate("/homepage");
        return;
      }
      if (
        location.pathname.startsWith("/verify-email") &&
        currentUser &&
        currentUser.emailVerification &&
        (userId || secret)
      ) {
        navigate("/homepage");
        return;
      }
      if (
        location.pathname.startsWith("/verify-email") &&
        (!userId || !secret)
      ) {
        navigate("/signin");
        return;
      }
      if (!location.pathname.startsWith("/verify-email")) {
        if (!currentUser || !currentUser.emailVerification) {
          await authService.deleteSession();
          await authService.createUserVerification();

          navigate("/signin"); 
        }
        if (currentUser) {
          setCurrentLoggedInUser(currentUser);
        }
        return;
      }
    }
    checkUserSession();
  }, []);
  return (
    <AuthContext.Provider
      value={{ currentLoggedInUser, setCurrentLoggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
