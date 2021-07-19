import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";


const DefaultData = async() => {
        try {
            await Product.deleteMany({});
            await Product.insertMany(products);
            console.log('Data imported successfully');

        } catch(error) {
            console.log('Error: ',error.message);
        }

}

export default DefaultData;