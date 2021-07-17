import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserDashboard from "./pages/UserAreaDashboard/UserDashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userArea" component={UserDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;