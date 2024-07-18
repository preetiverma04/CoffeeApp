
import { ADD_TO_CART, ADD_TO_FAVOURITE ,REMOVE_FROM_CART} from './Constants'


const initialState = {
    favourites: [],
    Cart: []
};
export const Reducer = (state = initialState, action: any) => {
    console.log('=============afsadfasdfasd=======================');
    console.log(action);
    console.log('====================================');
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            const updatedFovourite=state.favourites.filter(item=>item.id!==action.payload.id);
            return {
                ...state,
                favourites: [...updatedFovourite,{ ...action.payload}],
            };
        default:
            return state;
    }
}
export const CartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
    
            const updatedCart = state.Cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                Cart: [...updatedCart, { ...action.payload }],
            };
        // case REMOVE_FROM_CART:
        //     return {
        //         ...state,
        //         Cart: state.Cart.filter(item => item.id !== action.payload),
        //     };
        default:
            return state;
    }
};

// export const PaymentPriceReducer = (state = initialPaymentPriceState,action:any)=>{
//     switch(action.type){
//         case PAYMENT_PRICE:
//             return{
//                 ...state,
//                 PaymentPrice:[...state.PaymentPrice,action.payload]
//             }
//     }
// }

// export const UpdateCartReducer=(state=initialCartUpdate,action:any)=>{
//     switch(action.type){
//         case UPDATE_VALUE:
//             return{

//             };
//         default: return state;
//     }

// }
// export const RemoveCartReducer = (state = initialCartRemove, action: any) => {
//     switch (action.type) {
//         case REMOVE_VALUE:
//             return {

//             };
//         default: return state;
//     }

// }
