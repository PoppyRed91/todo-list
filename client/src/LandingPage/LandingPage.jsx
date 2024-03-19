import styles from "./LandingPage.css";
import image from "./TaskZilla.png";
const LandingPage = () => {
  return (
    <>
    <div className="landing">
      <img className="taskzilla" src={image} alt="image" />

      <button className="landingbtns">Log in</button>
      <p className="subText">...or if you dont have an account...</p>
      <button className="landingbtns">Sign up</button>
    </div>

    </>
  );
};

export default LandingPage;
