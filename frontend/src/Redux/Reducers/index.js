import { combineReducers } from "redux";
import toastReducer from "./ToastReducer";
export default combineReducers({
  toast: toastReducer,
});
