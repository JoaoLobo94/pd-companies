import React from "react";
import MetaMaskLogin from "../../../components/Buttons/MetaMaskLogin";
import Card from "react-bootstrap/Card";
import AnimatedMetamaskLogo from "../../Logos/AnimatedMetamaskLogo";

const LoginCard = () => {
  return (
    <div id="logo-container">
      <Card>
        <MetaMaskLogin />
      </Card>
    </div>
  );
};

function animatedFox() {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("logo-container");
    container.prepend(AnimatedMetamaskLogo.container);
  });
}
animatedFox()
export default LoginCard;
