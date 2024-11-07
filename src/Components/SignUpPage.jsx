import { useState } from "react"
import "./signUpPage.scss"

export default function SignUpPage() {
const [showPassword, setShowPassword] = useState(false);

function togglePassword() {
  setShowPassword(!showPassword)
}


    return (
      <div className="signUp">
        <form className="signUp__form" >
        <div className="signUp__wrapper">
          <h1>Create your account</h1>
          <div className="signUp__email-input-box">
            <input
              className="signUp__email-input"
              type="email"
              name="enterEmail"
              placeholder="Email"
              required
            />
          </div>
          <div className="signUp__password-input-box">
            <input
              className="signUp__password-input"
              type={showPassword ? "text" : "password"}
              name="enterPassword"
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