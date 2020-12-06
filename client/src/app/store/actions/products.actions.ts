import { Action } from '@ngrx/store'
import { IProductItem } from '../models/product-item-model'
import actionTypes from './actionTypes'

export class LoadProductItem implements Action {
	readonly type = actionTypes.LOAD_PRODUCT_DETAIL;

	constructor (public payload: IProductItem) {}
}

export type ProductAction = LoadProductItem;
