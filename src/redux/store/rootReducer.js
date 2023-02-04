import { fetchingProductReducer } from "../reducer/ProductReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    allProducts: fetchingProductReducer,
})

export default rootReducer;