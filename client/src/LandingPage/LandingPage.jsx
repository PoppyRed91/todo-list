import styles from "./LandingPage.css";
import image from "./TaskZilla.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <img className="taskzilla" src={image} alt="image" />
        <Link to="/client/src/LogInPage/Login.jsx">
          <button className="landingbtns">Log in</button>
        </Link>{" "}
        <p className="subText">...or if you dont have an account...</p>
        <Link to="/client/src/Login/SignUp.jsx">
          <button className="landingbtns">Sign up</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
