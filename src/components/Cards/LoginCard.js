// Need to implement animated metamask logo. Static one is just for MVP
import "./LoginCard.css";
import '../Logos/metamask.svg'
import {ReactComponent as StaticFox} from '../Logos/metamask.svg';
// const ModelViewer = require("@metamask/logo");

const LoginCard = () => {
  return (
    <div className="metamask-container">
      <div className="metamask-card">
        <div className="metamask-title">Click to login with metamask</div>
        <div id="logo-container" className="metamask-logo">
          <StaticFox />
        </div>
      </div>
    </div>
  );
};

// const AnimatedMetamaskLogo = ModelViewer({
//   pxNotRatio: true,
//   width: 110,
//   height: 110,
//   followMouse: false,
//   slowDrift: false,
// });
// AnimatedMetamaskLogo.setFollowMouse(true);

// function animatedFox() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("logo-container");
//     container.prepend(AnimatedMetamaskLogo.container);
//   });
// }
// animatedFox();
export default LoginCard;
