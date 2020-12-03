import { ProductAction } from '../actions/products.actions';
// import ProductModel from '../models/product-item.model';
import actionTypes from '../actions/actionTypes';

const initialState: Object = { productDetail: {} };

export function ProductsReducer(
	state: any | undefined = initialState,
	action: ProductAction
): any {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCT_DETAIL:
			return [...state, action.payload];
		default:
			return state;
	}
}

export default ProductsReducer;
