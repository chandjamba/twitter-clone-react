export default function SignInPage() {
    return (
        <div className="signIn">
      <form className="signIn__form" onSubmit={signInButtonHandler}>
        <div className="signIn__wrapper">
          <h1>Create your account</h1>
          <div className="signIn__name-input-box">
            <div className="signIn__name-input-inner-box">
              <input
                className="signIn__name-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            {nameError && (
              <p className="signIn__name-input-error">
                Please enter name inside input
              </p>
            )}
          </div>
          <div className="signIn__email-input-box">
            <div className="signIn__email-input-inner-box">
              <input
                className="signIn__email-input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            {emailError && (
              <p className="signIn__email-input-error">
                Please check your email !
              </p>
            )}
          </div>
          <div className="signIn__password-input-box">
            <div className="signIn__password-input-show-btn-inner-box">
              <input
                className="signIn__password-input"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="signIn__show-password-btn"
                onClick={togglePassword}
                type="button"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {passwordError && (
              <p className="signIn__password-input-error">
                Please check your password !
              </p>
            )}
          </div>
          <button className="signIn__submit-btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
    )
}