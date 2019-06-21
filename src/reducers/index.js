import { combineReducers } from "redux";
import discountCodeReducer from './discountCodeReducer';


export default combineReducers({
    discountCode: discountCodeReducer
});