import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, applyMiddleware(logger,thunk))

export default store;