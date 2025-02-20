import "./signUpPage.scss";
import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { validatePasswordWithRegex } from "../lib/utils/validatePasswordWithRegex";
import { validateUserNameWithRegex } from "../lib/utils/validateUserNameWithRegex";
import { authService } from "../lib/appwrite/services/auth.service";
import { userService } from "../lib/appwrite/services/user.service";
import { Link, useNavigate } from "react-router-dom";
import { Twitter } from "lucide-react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
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
    // Username input validation function call. //
    const isValidUserName = validateUserNameWithRegex(formDataObject.username);
    setUserNameError(!isValidUserName);

    if (!isValidEmail || !isValidPassword || !nameInputNoWhiteSpace) {
      return;
    }

    // Create AuthUser/ Account in appwrite. By given below method. //
    const createdAccount = await authService.createAccount({
      email: formDataObject.email,
      password: formDataObject.password,
      name: formDataObject.name,
      username: formDataObject.username,
    });
    // Create a login session for the user. //
    const createdLoginSession = await authService.createSession({
      email: formDataObject.email,
      password: formDataObject.password,
    });
    // Send an verification email asap after session created.//
    const createdEmailVerification = await authService.createUserVerification();
    // create or save user in database. //
    const userSaved = await userService.createUser({
      name: formDataObject.name,
      userName: formDataObject.username,
      email: formDataObject.email,
    });
    console.log(userSaved);
    // Send an email for user verification delete the browser session. So, no any user can login without verification complete. //
    // This step is for delete signIn browser session. //
    const deleteAccountSession = await authService.deleteSession();
    // Navigate the page direct to sign in page. //
    // Just follow up the given 4 methods and enter to sign in page of application. //
    navigate("/signin");
  };

  return (
    <div className="signUp">
      <div className="signUp-auth-container">
        <form onSubmit={signUpButtonHandler} className="signUp-auth-form">
          <div className="signUp-auth-header">
            <Twitter className="twitter-icon" />
          </div>
          <h1>Join Twitter today</h1>

          <div className="signUp-form-group">
            <input
              className="signUp-input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <p className="signUp-input-error">
            {nameError ? "check your name !" : ""}
          </p>
          <div className="signUp-form-group">
            <input
              className="signUp-input"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <p className="signUp-input-error">
            {userNameError ? "username not available !" : ""}
          </p>
          <div className="signUp-form-group">
            <input
              className="signUp-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <p className="signUp-input-error">
            {emailError ? "check your email !" : ""}
          </p>

          <div className="signUp-form-group">
            <input
              className="signUp-input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <p className="signUp-input-error">
            {passwordError ? "check your password !" : ""}
          </p>

          <button className="btn-primary" type="submit">
            Sign up
          </button>
          <p className="signUp-switch-text">
            Already have an account?
            <Link className="signUp-switch-button" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
