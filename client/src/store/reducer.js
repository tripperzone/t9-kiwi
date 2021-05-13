import { combineReducers } from "redux";
import { suggestionsReducer } from "./reducers";

export default combineReducers({
  suggestions: suggestionsReducer,
});