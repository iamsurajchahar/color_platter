import { combineReducers } from "redux";
import authReducer from "./authReducer";
import colorsReducer from "./colorsReducer";
import { counterReducer } from "./reducers/counter";

const rootReducer = combineReducers({ 
    counter: counterReducer,
    auth: authReducer,
    colors: colorsReducer
 });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
