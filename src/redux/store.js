import { createStore, combineReducers } from "redux";

import lenguage from "./reducers/lenguage.js";

const reducer = combineReducers({
    lenguage,
  });
  
  export const store = createStore(reducer);