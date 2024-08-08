import { ADD_TO_CART, ADD_TO_FAVOURITE,  DATE_INFO,  DECREMENT_ITEM_QUANTITY, INCREMENT_ITEM_QUANTITY, INITIALIZE_CART, INITIALIZE_FAVOURITE, INITIALIZE_ORDER_HISTORY, REMOVE_FROM_CART, REMOVE_FROM_FAVOURITE, UPDATE_ITEM_QUANTITY, } from "./Constants";
export const initializeFavourite = (favourites: any)=>{
    return{
        type:INITIALIZE_FAVOURITE,
        payload: favourites,
    }
}
export const addToFavourite = (id:any) => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    return {
        type: ADD_TO_FAVOURITE,
        payload: id,
    };
}
export const removeFromFavourite = (id:any) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: id,
});
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
}
// Actions
export const incrementItemQuantity = (id,selectedSize) => ({
    type: INCREMENT_ITEM_QUANTITY,
    payload: {id ,selectedSize},
});

export const decrementItemQuantity = (id,selectedSize) => ({
    type: DECREMENT_ITEM_QUANTITY,
    payload:  {id,selectedSize} ,
});
export const removeFromCart = (CartItems: any) => {
    return {
        type: REMOVE_FROM_CART,  
    };
}

export const initializeCart = (cartItems: any) => ({
    type: INITIALIZE_CART,
    payload: cartItems,
});
export const initializeOrderHistory = (orderHistory: any) => ({
    type: INITIALIZE_ORDER_HISTORY,
    payload: orderHistory,
});
export const updateItemQuantity = (id: any, quantity: number) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: { id, quantity },
});




