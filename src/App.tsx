import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";
import ConfirmEmailPage from "./Components/ConfirmEmailPage";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/confirm-email" element={<ConfirmEmailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
