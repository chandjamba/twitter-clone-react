import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
// import "./index.css";
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <AuthContextProvider>
          <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
          </Routes>
        </AuthContextProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;