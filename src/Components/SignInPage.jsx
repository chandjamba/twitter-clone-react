import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "./signInPage.scss"
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import {validatePasswordWithRegex} from "../lib/utils/validatePasswordWithRegex";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonType, setButtonType] = useState();

  // Toggle Show password Button handler //
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  

  // Create Form SignIn submit button handler to access the all form data in once. //
  const signInButtonHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const resp = formDataObject;
    console.log(resp);

    // Email input validation function call. //
    const isValidEmail = validateEmailWithRegex(formDataObject.email);
    setEmailError(!isValidEmail)
    
    // Password input validation function call. //
    const isValidPassword = validatePasswordWithRegex(formDataObject.password);
    setPasswordError(!isValidPassword)

    // Email input validation for no white space. //
    const emailInputNoWhiteSpace = formDataObject.email.trim().length > 0;
    
    // Password input validation for no white space. //
    const passwordInputNoWhiteSpace = formDataObject.password.trim().length > 0;
    
    // signIn button disable on invalid or empty inputs. //
    setButtonType(!isValidEmail && !emailInputNoWhiteSpace && !passwordInputNoWhiteSpace);
  }
  

    return (
        <div className="signIn">
      <form className="signIn__form" onSubmit={signInButtonHandler}>``
        <div className="signIn__wrapper">
          <h1>Sign In</h1>
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
          <button className="signIn__submit-btn btn-primary" type = {buttonType ? "submit" : "disabled"} >
            Sign In
          </button>
        </div>
      </form>
    </div>
    )
}