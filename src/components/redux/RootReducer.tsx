import { CartReducer,  Reducer } from "./Reducer";
import { combineReducers } from 'redux';
export default combineReducers(
    {
        Favourites:Reducer,
        Cart: CartReducer,
        // PaymentPrice:PaymentPriceReducer
        // UpdateCart:UpdateCartReducer,
        // RemoveCart:RemoveCartReducer
    }
)