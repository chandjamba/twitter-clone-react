import "./emailVerificationPage.scss";
import "../lib/appwrite/services/auth.service";
import { authService } from "../lib/appwrite/services/auth.service";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    <div className="verifyEmail">
      <div className="verifyEmail__inner-box">
        <div className="verifyEmail__para-box">
          <p className="verifyEmail__para">
            Please click the below button for Email verification.
          </p>
        </div>
        <button className="verifyEmail__btn" onClick={verifyEmailHandler}>
          Verify Email
        </button>
      </div>
    </div>
  );
}
