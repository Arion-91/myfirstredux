import {combineReducers} from "redux";
import {pageReducer} from "./page";
import {userReducer} from "./user";

// export function rootReducer(state = initialState) {
//     return state
// }

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});