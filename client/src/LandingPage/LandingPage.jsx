import styles from "./LandingPage.css";
import image from "./TaskZilla.png";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <img className="taskzilla" src={image} alt="image" />
        <Link to="/Login">
          <button className="landingbtns">Log in</button>
        </Link>{" "}
        <p className="subText">...or if you dont have an account...</p>
        <button className="landingbtns">Sign up</button>
      </div>
    </>
  );
};

export default LandingPage;
