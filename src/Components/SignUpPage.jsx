import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { validatePasswordWithRegex } from "../lib/utils/validatePasswordWithRegex";
import "./signUpPage.scss";
import { Eye, EyeOff } from "lucide-react";

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
    setEmailError(!isValidEmail);

    //  Password input validation function call. //
    const isValidPassword = validatePasswordWithRegex(formDataObject.password);
    setPasswordError(!isValidPassword);

    // Name input validation function call. //
    const nameInputNoWhiteSpace = formDataObject.name.trim().length > 0;
    setNameError(!nameInputNoWhiteSpace);

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

            {nameError && (
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
            {emailError && (
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
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {passwordError && (
              <p className="signUp__password-input-error">
                Please check your password !
              </p>
            )}
          </div>
          <button className="signUp__submit-btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
