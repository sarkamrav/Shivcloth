import  express from 'express';
import {getProduct,getProductById} from '../controller/productController.js'


const router = express.Router();
/* Public Route   for all product */
router.route('/').get(getProduct)


/* Public Route   for productById*/
router.route('/:id').get(getProductById)


export default router;