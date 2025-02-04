import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { validatePasswordWithRegex } from "../lib/utils/validatePasswordWithRegex";
import "./signUpPage.scss";
import { authService } from "../lib/appwrite/services/auth.service";
import { APPWRITE_CONFIG } from "../lib/appwrite/config";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Toggle Show password Button handler //
  function togglePassword() {
    setShowPassword(!showPassword);
  }
  // IsLogin or not handler //

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
    const createdAccount = await authService.createAccount({
      email: formDataObject.email,
      password: formDataObject.password,
      name: formDataObject.name,
    });
    // Create a login session for the user. //
    const createdLoginSession = await authService.createSession({
      email: formDataObject.email,
      password: formDataObject.password,
    });
    // Send an verification email asap after session created.//
    const createdEmailVerification = await authService.createUserVerification();
    // Send an email for user verification delete the browser session. So, no any user can login without verification complete. //
    // This step is for delete signIn browser session. //
    const deleteAccountSession = await authService.deleteSession();
    // Navigate the page direct to sign in page. //
    // Just follow up the given 4 methods and enter to sign in page of application. //
    navigate("/signin");
  };

  return (
    <div className="container">
      <div className="auth-container">
        <form onSubmit={signUpButtonHandler} className="auth-form">
          <div className="auth-header">
            <svg viewBox="0 0 24 24" className="twitter-icon">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <h1>{"Join Twitter today"}</h1>

          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <p className="input-error">{nameError}</p>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <p className="input-error">{emailError}</p>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <p className="input-error">{passwordError}</p>

          <button className="btn-primary" type="submit">
            Sign up
          </button>
          <p className="switch-text">
            {"Already have an account?"}
            <button
              className="switch-button"
              onClick={() => navigate("/signin")}
            >
              {"Sign in"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
