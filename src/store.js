import allReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const composeEnhancers = composeWithDevTools({});
//TODO: implement presistance

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, allReducers);

// export const persistor = persistStore(store);

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

