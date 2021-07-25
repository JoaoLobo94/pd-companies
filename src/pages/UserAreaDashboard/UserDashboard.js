import "./UserDashboard.css";
import { Redirect } from "react-router-dom";
import { useSelector} from "react-redux";

const UserDashboard = () => {
  const isUnlocked = useSelector(state => state.isloggedWithMetamask)
  if (isUnlocked) {
    return <div></div>;
  }
  // Todo: implement modal saying you have to login. reload page live, no hard refresh
  return <Redirect to="/" />;
};

export default UserDashboard;
