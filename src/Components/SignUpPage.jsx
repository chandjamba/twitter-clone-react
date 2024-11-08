import { useState } from "react"
import "./signUpPage.scss"
import { account, ID } from "../lib/appwrite";

export default function SignUpPage() {
const [showPassword, setShowPassword] = useState(false);

// Toggle Show password Button handler // 
function togglePassword() {
  setShowPassword(!showPassword)
}

// Create Form SignUp submit button handler to access the all form data in once. //
const signUpButtonHandler =  async(event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataEntries = formData.entries();
  const formDataObject = Object.fromEntries(formDataEntries);
  console.log(formDataObject, "formDataObject");

  // Create AuthUser/ Account in appwrite. By given below method. //
  const createdAccount =  await account.create(
    ID.unique(),
    formDataObject.email,
    formDataObject.password,
  );
  console.log(createdAccount, "Account created");
}


    return (
      <div className="signUp">
        <form className="signUp__form" onSubmit={signUpButtonHandler}>
        <div className="signUp__wrapper">
          <h1>Create your account</h1>
          <div className="signUp__email-input-box">
            <input
              className="signUp__email-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="signUp__password-input-box">
            <input
              className="signUp__password-input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="signUp__show-password-btn"
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? "Hide password" : "Show password"}
          </button>
          <button className="signUp__submit-btn" type="submit">
            Sign Up
          </button>

          
        </div>
      </form>
    </div>
    )
}