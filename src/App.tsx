import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
