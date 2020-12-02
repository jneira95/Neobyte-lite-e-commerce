/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ProductItem } from '../store/models/product-item.model';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	log: any;

	constructor(private http: HttpClient) {}

	private mainEndpoint = 'http://localhost:5000';

	private productEndpoint = '/product';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	getProductDetail() {
		return this.http.get(``);
	}

	getProductByReference(id: string): Observable<ProductItem> {
		const url = `${this.mainEndpoint}${this.productEndpoint}/${id}`;
		return this.http.get<ProductItem>(url).pipe(
			tap((_) => this.log(`fetched id=${id}`)),
			catchError(
				this.handleError<ProductItem>(`getProductByReference id=${id}`)
			)
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
