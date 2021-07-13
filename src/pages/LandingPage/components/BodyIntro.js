import "./BodyIntro.css";
import { ReactComponent as DecentralizedDepiction } from "../../../images/decentralized.svg";

const Body = () => {
  return (
    <div className="body-intro-content">
      <div className="title">
        <h1>DECENTRALIZE YOUR WORK</h1>
        <DecentralizedDepiction />
      </div>
    </div>
  );
};

export default Body;
