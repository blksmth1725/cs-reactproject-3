import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import headernavbar from "./headernavbar";

const rootReducer = combineReducers({
	form,
	headernavbar
});

export default rootReducer;
