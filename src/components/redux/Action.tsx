// Actions.js

import { ADD_TO_CART, ADD_TO_FAVOURITE, REMOVE_FROM_CART } from "./Constants";

export const addToFavourite = (id:any) => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    return {
        type: ADD_TO_FAVOURITE,
        payload: id,
    };
}
export const addToCart = (item: any) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
}

export const removeFromCart = (item: any) => {
    return {
        type: REMOVE_FROM_CART,
       
    };
}

