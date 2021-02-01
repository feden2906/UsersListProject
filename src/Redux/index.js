import {createStore} from "redux";
import {reducer} from "./reducers/user-reducer";

export const store = createStore(reducer)
