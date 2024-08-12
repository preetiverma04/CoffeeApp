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

// AsyncStorage helper functions
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

const saveToOrderHistoryStorage = async (orderHistory: any[]) => {
    try {
        await AsyncStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    } catch (error) {
        console.error("Error saving order history data to AsyncStorage", error);
    }
};

// Favourites Reducer
export const Reducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case INITIALIZE_FAVOURITE:
            return {
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
export const CartReducer = (state = initialState, action: { type: any; payload: any; }) => {
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
        case ADD_TO_CART: {
            const cartAction = action.payload;
            const existingItem = state.Cart.find(item => item.id === cartAction.id);

            const updatedCart = existingItem
                ? state.Cart.map(item =>
                    item.id === cartAction.id
                        ? {
                            ...item,
                            prices: item.prices.map(priceItem =>
                                priceItem.size === cartAction.selectedSize
                                    ? { ...priceItem, quantity: (priceItem.quantity || 0) + (cartAction.quantity || 1) }
                                    : priceItem
                            ),
                        }
                        : item
                )
                : [
                    ...state.Cart,
                    {
                        ...cartAction,
                        prices: cartAction.prices.map(priceItem =>
                            priceItem.size === cartAction.selectedSize
                                ? { ...priceItem, quantity: cartAction.quantity || 1 }
                                : priceItem
                        ),
                    },
                ];

            saveToCartStorage(updatedCart);
            return {
                ...state,
                Cart: updatedCart,
            };
        }
        case UPDATE_ITEM_QUANTITY: {
            const updatedCartQuantity = state.Cart.map(item =>
                item.id === action.payload.id
                    ? {
                        ...item,
                        prices: item.prices.map(price =>
                            price.size === action.payload.size
                                ? { ...price, quantity: action.payload.quantity }
                                : price
                        ),
                    }
                    : item
            );
            saveToCartStorage(updatedCartQuantity);
            return {
                ...state,
                Cart: updatedCartQuantity,
            };
        }
        case INCREMENT_ITEM_QUANTITY: {
            const { id, selectedSize } = action.payload;
            console.log("selected Size ", selectedSize)
            console.log('Incrementing quantity for item ID:', id, 'Size:', selectedSize);
            const updatedCart = state.Cart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        prices: item.prices.map(price =>
                            price.size === selectedSize
                                ? { ...price, quantity: (price.quantity || 0) + 1 }
                                : price
                        ),
                    }
                    : item
            );
            saveToCartStorage(updatedCart);
            return {
                ...state,
                Cart: updatedCart,
            };
        }

        case DECREMENT_ITEM_QUANTITY: {
            const { id, selectedSize } = action.payload;
            console.log("kehiurwiuehuhiwh", id, selectedSize)
            const updatedCart = state.Cart.map(item => {
                if (item.id === id) {
                    const updatedPrices = item.prices.map(price => {
                        if (price.size === selectedSize) {
                            const updatedQuantity = Math.max((price.quantity || 1) - 1, 0);
                            return { ...price, quantity: updatedQuantity };
                        }
                        return price;
                    }).filter(price => price.quantity > 0);
                    return {
                        ...item,
                        prices: updatedPrices,
                    };
                }
                return item;
            }).filter(item => item.prices.length > 0);

            saveToCartStorage(updatedCart);
            return {
                ...state,
                Cart: updatedCart,
            };
        }

        case REMOVE_FROM_CART: {
            const updatedOrderHistory = [...state.OrderHistory, ...state.Cart];
            saveToOrderHistoryStorage(updatedOrderHistory);
            saveToCartStorage([]);
            return {
                ...state,
                OrderHistory: updatedOrderHistory,
                Cart: [],
            };
        }
        default:
            return state;
    }
};
