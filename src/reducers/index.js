import MetamaskLoginReducer from "./MetamaskLogin";
// import MetamaskBalances from "./MetamaskBalance";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  isloggedWithMetamask: MetamaskLoginReducer,
  // MetamaskBalances: MetamaskBalances,
});

export default allReducers


