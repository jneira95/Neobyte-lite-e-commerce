
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { IProductItem } from '../store/models/product-item-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor (private http: HttpClient) {}

	private mainEndpoint = 'http://localhost:5000';
  private productEndpoint = '/product';

  getProductById (id: string): Observable<IProductItem> {
    const url = `${this.mainEndpoint}${this.productEndpoint}/${id}`
    return this.http.get<IProductItem>(url)
  }

  getProductList (): Observable<IProductItem> {
    const url = `${this.mainEndpoint}${this.productEndpoint}`
    return this.http.get<IProductItem>(url)
  }

  getProductListFilter (category: string, subCategory: string): Observable<IProductItem> {
    const url = `${this.mainEndpoint}${this.productEndpoint}/?category=${category}&sub-category=${subCategory}`
    return this.http.get<IProductItem>(url)
  }
}
