// libraries
import { combineReducers } from "redux";

// Reducers
import user from "./user/user.reducer";

// root reducer
const rootReducer = combineReducers({ user });

export default rootReducer;
