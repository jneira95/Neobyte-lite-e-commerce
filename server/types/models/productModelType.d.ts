import { Document } from 'mongoose';

interface ProductModel {
name: string;
reference: string;
'part-number'?: string;
ean?: number;
price: number;
stock?: number;
'product-status': boolean;
images: Array<string>;
'general-specs'?: Array<string>;
shortDescription: string;
generalDescription: Array;
}

interface IProduct extends ProductModel, Document {}

export default IProduct;
