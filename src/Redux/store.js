import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers/rootReducer";

const INITIAL_STATE = {};
const middleware = [];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
);

export default store;