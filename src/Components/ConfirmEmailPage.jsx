import "./confirmEmail.scss";
import { useSearchParams } from "react-router-dom";
import "../lib/appwrite/services/auth.service"
import { useEffect } from "react";

export default function ConfirmEmail() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");

  useEffect( async()=> {
    await authService.createUserVerification(userId, secret);
  }, []);
    
  return <div className="confirmEmail">confirm email</div>;
}
