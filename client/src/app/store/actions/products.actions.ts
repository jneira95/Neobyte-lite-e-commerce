import { Action } from '@ngrx/store';
import { ProductItem } from '../models/product-item-model';
import actionTypes from './actionTypes';

export class LoadProductItem implements Action {
	readonly type = actionTypes.LOAD_PRODUCT_DETAIL;

	constructor(public payload: ProductItem) {}
}

export type ProductAction = LoadProductItem;
