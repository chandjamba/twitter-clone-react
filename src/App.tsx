import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import { AuthContextProvider } from "./contexts/AuthContext";
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
