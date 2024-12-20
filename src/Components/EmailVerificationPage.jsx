export default function EmailVerificationPage() {
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
