import "./emailVerificationPage.scss";
import { authService } from "../lib/appwrite/services/auth.service";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Twitter } from "lucide-react";

export default function EmailVerificationPage() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");
  const navigate = useNavigate();

  const verifyEmailHandler = async () => {
    await authService.updateVerification({ userId, secret });
    navigate("/signin");
  };

  return (
    <div className="email-verification">
      <div className="email-verification-content">
        <Twitter className="twitter-icon" />
        <h1>Verify your email</h1>
        <p className="email-verification-text">
          You're almost there!
          <br />
        </p>
        <p className="email-verification-instruction">
          Just click on the button to complete your signup.
          <br />
          If you don't see it, you may need to
          <strong> check after few seconds.</strong>
        </p>
        <button className="btn-secondary" onClick={verifyEmailHandler}>
          Verify email
        </button>
      </div>
    </div>
  );
}
