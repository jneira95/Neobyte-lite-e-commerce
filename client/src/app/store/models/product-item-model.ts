export interface IProductItem {
  name: string;
  reference: string;
  'part-number'?: string;
  ean?: number;
  price: number;
  stock?: number;
  brand?: string;
  'product-status': boolean;
  images: Array<string>;
  'general-specs'?: Array<string>;
  shortDescription: string;
  generalDescription: Array<object>;
}
