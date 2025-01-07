import "./emailVerificationPage.scss";
import "../lib/appwrite/services/auth.service";

export default function EmailVerificationPage() {
  const verifyEmailHandler = async () => {
    const verification = await authService.createUserVerification();
    Console.log(verification, "verification done");
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
