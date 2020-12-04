
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { ProductItem } from '../store/models/product-item-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor (private http: HttpClient) {}

	private mainEndpoint = 'http://localhost:5000';

	private productEndpoint = '/product';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProductById (id: string): Observable<ProductItem> {
    const url = `${this.mainEndpoint}${this.productEndpoint}/${id}`
    return this.http.get<ProductItem>(url)
  }
}
