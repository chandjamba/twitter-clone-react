import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { validatePasswordWithRegex } from "../lib/utils/validatePasswordWithRegex";
import "./signUpPage.scss";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Toggle Show password Button handler //
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  // Create Form SignUp submit button handler to access the all form data in once. //
  const signUpButtonHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);

    // Email input validation function call. //
    const isValidEmail = validateEmailWithRegex(formDataObject.email);
    setEmailError(isValidEmail);

    //  Password input validation function call. //
    const isValidPassword = validatePasswordWithRegex(formDataObject.password);
    setPasswordError(isValidPassword);

    // Name input validation function call. //
    const nameInputNoWhiteSpace = formDataObject.name.trim().length > 0;
    setNameError(nameInputNoWhiteSpace);

    if (!isValidEmail || !isValidPassword || !nameInputNoWhiteSpace) {
      return;
    }

    // Create AuthUser/ Account in appwrite. By given below method. //
  };

  return (
    <div className="signUp">
      <form className="signUp__form" onSubmit={signUpButtonHandler}>
        <div className="signUp__wrapper">
          <h1>Create your account</h1>
          <div className="signUp__name-input-box">
            <div className="signUp__name-input-inner-box">
              <input
                className="signUp__name-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            {!nameError && (
              <p className="signUp__name-input-error">
                Please enter name inside input
              </p>
            )}
          </div>
          <div className="signUp__email-input-box">
            <div className="signUp__email-input-inner-box">
              <input
                className="signUp__email-input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            {!emailError && (
              <p className="signUp__email-input-error">
                Please check your email !
              </p>
            )}
          </div>
          <div className="signUp__password-input-box">
            <div className="signUp__password-input-show-btn-inner-box">
              <input
                className="signUp__password-input"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="signUp__show-password-btn"
                onClick={togglePassword}
                type="button"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-eye-off"
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide-eye"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            {!passwordError && (
              <p className="signUp__password-input-error">
                Please check your password !
              </p>
            )}
          </div>
          <button className="signUp__submit-btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
