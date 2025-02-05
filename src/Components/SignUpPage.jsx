import "../styles/main.scss";
import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { validatePasswordWithRegex } from "../lib/utils/validatePasswordWithRegex";
import { authService } from "../lib/appwrite/services/auth.service";
import { useNavigate } from "react-router-dom";
import { Twitter } from "lucide-react";

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
            <Twitter className="twitter-icon" />
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
