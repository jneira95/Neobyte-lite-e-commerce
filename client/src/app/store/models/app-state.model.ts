import { ProductItem } from './product-item.model';

export interface AppState {
	readonly product: Array<ProductItem>;
}
