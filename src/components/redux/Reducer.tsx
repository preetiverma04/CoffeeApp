import { ADD_TO_CART, ADD_TO_FAVOURITE } from './Constants'

const initialState = {
    favourites: [],

};
const initialCartState = {

    Cart: []
};
export const Reducer = (state = initialState, action: any) => {
    console.log('=============afsadfasdfasd=======================');
    console.log(action);
    console.log('====================================');
    switch (action.type) {

        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        default:
            return state;

    }
}
export const CartReducer = (state = initialCartState, action: any) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                Cart: [...state.Cart, action.payload],
            };

        default:
            return state;

    }
}