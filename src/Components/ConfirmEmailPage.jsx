import "./confirmEmail.scss";
import { useSearchParams } from "react-router-dom";
import "../lib/appwrite/services/auth.service";
import { authService } from "../lib/appwrite/services/auth.service";

export default function ConfirmEmail() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  console.log(userId);
  const secret = params.get("secret");
  console.log(secret);

  const verifyEmailHandler = async () => {
    const emailVerified = await authService.createUserVerification(
      userId,
      secret
    );
    console.log(emailVerified, "emailVerified");
  };

  return (
    <div className="confirmEmail">
      <button className="confirmEmail__btn" onClick={verifyEmailHandler}>
        Verified
      </button>
    </div>
  );
}
