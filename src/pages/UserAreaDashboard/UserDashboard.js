import "./UserDashboard.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import FirstLoginFrom from "./components/FirstLoginFrom";

const UserDashboard = () => {
  const isUnlocked = useSelector((state) => state.isloggedWithMetamask);
  if (isUnlocked) {
    return (
      <div>
        {/* TODO: Implement conditional and modal if first login */}
        <FirstLoginFrom />
      </div>
    );
  }
  // Todo: implement modal saying you have to login. reload page live, no hard refresh
  return <Redirect to="/" />;
};

export default UserDashboard;
