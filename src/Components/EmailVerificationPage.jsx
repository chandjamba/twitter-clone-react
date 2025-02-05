import "../styles/main.scss";
import "../lib/appwrite/services/auth.service";
import { authService } from "../lib/appwrite/services/auth.service";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Twitter } from "lucide-react";
import { useState } from "react";

export default function EmailVerificationPage() {
  const [params] = useSearchParams();
  const userId = params.get("userId");
  const secret = params.get("secret");
  // const [email, setEmail] = useState();
  const navigate = useNavigate();

  const verifyEmailHandler = async () => {
    await authService.updateVerification({ userId, secret });
    navigate("/signin");
  };

  const onResendEmail = async() => {
    await authService.createUserVerification(APPWRITE_CONFIG.sendVerificationEmailUrl);
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-content">
        <Twitter  className="twitter icon"/>
        <h1>Verify your email</h1>
        <p className="verification-text">
          You're almost there! We sent an email to
          <br />
          <strong>{"email"}</strong>
        </p>
        <p className="verification-instruction">
          Just click on the link in that email to complete your signup.
          <br />
          If you don't see it, you may need to <strong>check after few seconds.</strong>
        </p>
        <button className="verify-button" onClick={verifyEmailHandler}>
          {"Verify email"}
        </button>
        <p className="resend-text">
          Didn't receive the email?{" "}
          <button className="resend-button" onClick={onResendEmail}>
            Click to resend
          </button>
        </p>
      </div>
    </div>
  );
}
