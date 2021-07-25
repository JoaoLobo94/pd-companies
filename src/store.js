import persistReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  persistReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);