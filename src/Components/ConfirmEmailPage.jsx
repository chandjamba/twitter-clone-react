import "./confirmEmail.scss";
import { useSearchParams } from "react-router-dom";
import "../lib/appwrite/services/auth.service";
import { useEffect } from "react";
import { authService } from "../lib/appwrite/services/auth.service";

export default function ConfirmEmail() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");

  useEffect(() => {
    authService.createUserVerification();
  }, []);

  return <div className="confirmEmail">confirm email</div>;
}
