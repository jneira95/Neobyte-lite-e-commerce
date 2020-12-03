
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

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
    return this.http.get<ProductItem>(url).pipe(
      catchError(
        this.handleError<ProductItem>(`getProductByReference id=${id}`)
      )
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }
}
