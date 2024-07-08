// Actions.js
import FavouriteData from "../Data/FavouriteData";
import { ADD_TO_CART, ADD_TO_FAVOURITE } from "./Constants";

export const addToFavourite = (item:any) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    return {
        type: ADD_TO_FAVOURITE,
        payload: item,
    };
}
export const addToCart=(item:any)=>{
    return{
        type:ADD_TO_CART,
        payload:item,
    }
}

