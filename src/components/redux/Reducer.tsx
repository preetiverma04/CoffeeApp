import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ADD_TO_CART,
    ADD_TO_FAVOURITE,
    DECREMENT_ITEM_QUANTITY,
    INCREMENT_ITEM_QUANTITY,
    INITIALIZE_CART,
    INITIALIZE_FAVOURITE,
    INITIALIZE_ORDER_HISTORY,
    REMOVE_FROM_CART,
    REMOVE_FROM_FAVOURITE,
    UPDATE_ITEM_QUANTITY
} from './Constants';
const initialState = {
    favourites: [],
    Cart: [],
    OrderHistory: [],
};
const saveToFavouritesStorage = async (favourites: any[]) => {
    try {
        await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
    } catch (error) {
        console.error("Error saving favourites data to AsyncStorage", error);
    }
};
const saveToCartStorage = async (cart: any[]) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart data to AsyncStorage", error);
    }
};
const saveToOrderHistoryStorage = async (orderHistory: never[]) => {
    try {
        await AsyncStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    } catch (error) {
        console.error("Error saving order history data to AsyncStorage", error);
    }
};
export const Reducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case INITIALIZE_FAVOURITE: return {
            ...state,
            favourites: action.payload,
        };
        case ADD_TO_FAVOURITE:
            const updatedFavourite = state.favourites.filter(item => item.id !== action.payload.id);
            const newFavourites = [...updatedFavourite, { ...action.payload }];
            saveToFavouritesStorage(newFavourites);
            return {
                ...state,
                favourites: newFavourites,
            };
        case REMOVE_FROM_FAVOURITE:
            const filteredFavourites = state.favourites.filter(item => item.id !== action.payload);
            saveToFavouritesStorage(filteredFavourites);
            return {
                ...state,
                favourites: filteredFavourites,
            };
        default:
            return state;
    }
};
export const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZE_CART:
            return {
                ...state,
                Cart: action.payload,
            };
        case INITIALIZE_ORDER_HISTORY:
            return {
                ...state,
                OrderHistory: action.payload,
            };
        case ADD_TO_CART:
            const existingItemIndex = state.Cart.findIndex(item => item.id === action.payload.id);
            let updatedCart;
            if (existingItemIndex >= 0) {
                updatedCart = state.Cart.map((item, index) =>
                    index === existingItemIndex
                        ? {
                            ...item,
                            prices: item.prices.map(priceItem =>
                                priceItem.size === action.payload.size
                                    ? { ...priceItem, quantity: (priceItem.quantity || 0) + (action.payload.quantity || 1) }
                                    : priceItem
                            ),
                        }
                        : item
                );
            } else {
                updatedCart = [
                    ...state.Cart,
                    {
                        ...action.payload,
                        prices: action.payload.prices.map(priceItem =>
                            priceItem.size === action.payload.size
                                ? { ...priceItem, quantity: action.payload.quantity || 1 }
                                : priceItem
                        ),
                    },
                ];
            }
            saveToCartStorage(updatedCart);
            return {
                ...state,
                Cart: updatedCart,
            };
        case UPDATE_ITEM_QUANTITY:
            const updatedCartQuantity = state.Cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            saveToCartStorage(updatedCartQuantity);
            return {
                ...state,
                Cart: updatedCartQuantity,
            };
        case 'INCREMENT_ITEM_QUANTITY':
            return {
                ...state,
                Cart: state.Cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            };
        case 'DECREMENT_ITEM_QUANTITY':
            return {
                ...state,
                Cart: state.Cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
                        : item
                )
            };
        
           
        case REMOVE_FROM_CART:
            
            const updatedOrderHistory = [...state.OrderHistory, ...state.Cart];
            saveToOrderHistoryStorage(updatedOrderHistory);
            saveToCartStorage([]);
            return {
                ...state,
                OrderHistory: updatedOrderHistory,
                Cart: [],
            };
        default:
            return state;

        }
}
