import MetaMaskLogin from "../../../components/Buttons/MetaMaskLogin";
import Card from 'react-bootstrap/Card'
import AnimatedFox from "../../Logos/AnimatedFox";

const LoginCard = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
          <AnimatedFox />
          <MetaMaskLogin />
      </Card>
    </div>
  );
};

export default LoginCard;
