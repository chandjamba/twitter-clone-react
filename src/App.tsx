import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
