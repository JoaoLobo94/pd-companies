import MetamaskLoginReducer from "./MetamaskLogin";
// import MetamaskBalances from "./MetamaskBalance";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [''],
};


const rootReducer = combineReducers({
  isloggedWithMetamask: MetamaskLoginReducer,
  // MetamaskBalances: MetamaskBalances,
});

export default persistReducer(persistConfig, rootReducer)


