//tüm stateleri topladığımız yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
  //stateleri buraya yazıyoruz

  cart: cartReducer,
});

export default rootReducer;
