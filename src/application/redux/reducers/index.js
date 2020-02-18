import pagesReducer from "./pages";
import { combineReducers } from "redux";

export default combineReducers({
  numbers: pagesReducer
});
