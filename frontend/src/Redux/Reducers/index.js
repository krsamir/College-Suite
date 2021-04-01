import { combineReducers } from "redux";
import toastReducer from "./ToastReducer";
import tokenReducer from "./TokenReducer";
export default combineReducers({
  toast: toastReducer,
  token: tokenReducer,
});
