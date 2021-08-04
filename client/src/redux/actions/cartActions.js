import * as actionTypes from '../constants/cartConstant.js';
import axios from 'axios';

const url='http://localhost:8000';

export const addToCart = (id) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${url}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: data });

       //localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API',error);
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

  //  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};