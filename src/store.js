import { applyMiddleware, createStore } from "redux";
import { dataReducer } from "./dataSlice";
import thunk from "redux-thunk";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
