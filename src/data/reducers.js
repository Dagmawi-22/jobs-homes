// reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers if needed
});

export default rootReducer;
