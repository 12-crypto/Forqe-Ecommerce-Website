import * as actionType from '../constants/productConstant.js'




export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
        }
    };

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
   // console.log('Hi', action.type)
    switch(action.type){
        //case actionType.GET_PRODUCT_DETAILS_REQUEST:
         //   return { loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
        return { error: action.payload }

    // case actionTypes.GET_PRODUCT_DETAILS_RESET: 
    //     return {
    //         product: {}
    //     }
        default:
            return state
        }
    }