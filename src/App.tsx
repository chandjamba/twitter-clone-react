import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";

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
  )
}

export default App
