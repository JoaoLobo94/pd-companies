// Need to implement animated metamask logo. Static one is just for MVP
import "./LoginCard.css";
import "../Logos/metamask.svg";
import React from "react";
const ModelViewer = require("@metamask/logo");
class LoginCard extends React.Component {
  componentDidMount() {
        const AnimatedMetamaskLogo = ModelViewer({
          pxNotRatio: true,
          width: 110,
          height: 110,
          followMouse: false,
          slowDrift: false,
        });
        AnimatedMetamaskLogo.setFollowMouse(true);
        const container = document.getElementById("logo-container");
        container.prepend(AnimatedMetamaskLogo.container);
  }
  render() {
    return (
        <div className="metamask-container">
          <div className="metamask-card">
            <div className="metamask-title">Click to login with metamask</div>
            <div id="logo-container" className="metamask-logo">
            </div>
          </div>
        </div>
    );
  }
}

export default LoginCard;
