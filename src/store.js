import allReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
