import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headernavbar from "./headernavbarReducer";
import user from "./userReducer";
import shop from "./shopReducer";

const rootReducer = combineReducers({
	form,
	headernavbar,
	user,
	shop
});

export default rootReducer;
