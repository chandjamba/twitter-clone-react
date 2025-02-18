import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";
import EmailVerificationPage from "./Components/EmailVerificationPage";
import Homepage from "./Components/Homepage";
import ProfilePage from "./Components/ProfilePage";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import NotFoundPage from "./Components/NotFoundPage";
import EditProfilePage from "./Components/EditProfilePage";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
        <AuthContextProvider>
          <Routes>
            <Route path="/verify-email" element={<EmailVerificationPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
          </Routes>
        </AuthContextProvider>
      </main>
    </BrowserRouter>
  );
}
export default App;
