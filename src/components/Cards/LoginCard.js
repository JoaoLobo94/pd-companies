import AnimatedMetamaskLogo from "../Logos/AnimatedMetamaskLogo";
import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className="metamask-container">
      <div className="metamask-card">
        <div className="metamask-title">Click to login with metamask</div>
        <div id="logo-container" className="metamask-logo"></div>
      </div>
    </div>
  );
};

function animatedFox() {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("logo-container");
    container.prepend(AnimatedMetamaskLogo.container);
  });
}
animatedFox();
export default LoginCard;
