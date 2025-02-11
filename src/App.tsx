import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";
import EmailVerificationPage from "./Components/EmailVerificationPage";
import Homepage from "./Components/Homepage";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <AuthContextProvider>
          <Routes>
            <Route path="/verify-email" element={<EmailVerificationPage />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </AuthContextProvider>
      </main>
    </BrowserRouter>
  );
}
export default App;
