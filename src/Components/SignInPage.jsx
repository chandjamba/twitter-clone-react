import "../styles/main.scss";
import { useState } from "react";
import { validateEmailWithRegex } from "../lib/utils/validateEmailWithRegex";
import { authService } from "../lib/appwrite/services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import { Twitter } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Toggle Show password Button handler //
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  // Create Form SignIn submit button handler to access the all form data in once. //
  const signInButtonHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const isValidEmail = validateEmailWithRegex(formDataObject.email);
    setEmailError(!isValidEmail);
    //

    if (isValidEmail) {
      await authService.createSession({
        email: formDataObject.email,
        password: formDataObject.password,
      });

      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/signin");
      }
      if (!currentUser.emailVerification) {
        await authService.createUserVerification();
        await authService.deleteSession();
        navigate("/signin");
      }

      if (currentUser.emailVerification) {
        navigate("/homepage");
      }
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <form onSubmit={signInButtonHandler} className="auth-form">
          <div className="auth-header">
            <Twitter className="twitter-icon"></Twitter>
          </div>
          <h1>{"Log in to Twitter"}</h1>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn-primary" type="submit">
            Log in
          </button>
          <p className="switch-text">
            {"Don't have an account?"}
            <Link to={"/signup"} className="switch-button">
              {"Sign up"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
