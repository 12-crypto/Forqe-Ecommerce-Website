//import * as actionTypes from '../constants/productConstant';
import axios from 'axios';
import * as action from '../constants/productConstant.js'

const url = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const {data} = await axios.get(`${url}/products`);
        dispatch({ type: action.GET_PRODUCTS_SUCCESS,payload:data });

    } catch (error) {
        // console.log('error while calling products api');
        dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        //dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`${url}/product/${id}`);
        console.log(data);

        dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


// export const removeProductDetails = () => (dispatch) => {
//     dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

// };