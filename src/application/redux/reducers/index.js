import pagesReducer from "./pages";
import listReducer from "./list";
import { combineReducers } from "redux";

export default combineReducers({
  numbers: pagesReducer,
  lists: listReducer
});
