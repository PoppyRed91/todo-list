import { Login } from "./LogInPage/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./Login/SignUp.jsx";
import LandingPage from "./LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

