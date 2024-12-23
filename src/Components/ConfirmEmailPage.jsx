import "./confirmEmail.scss";
import { useSearchParams } from "react-router-dom";
import "../lib/appwrite/services/auth.service"

export default function ConfirmEmail() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  console.log(userId);
  const secret = params.get("secret");
  console.log(secret);

    const verifyEmailHandler = authService.createUserVerification();
    
  return <div className="confirmEmail">confirm email</div>;
}
