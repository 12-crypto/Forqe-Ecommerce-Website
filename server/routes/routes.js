import express from  'express';
// import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp} from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
// import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp)





export default router;