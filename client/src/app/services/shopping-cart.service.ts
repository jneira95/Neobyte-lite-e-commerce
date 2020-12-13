import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { ProductService } from './product.service'
import { MessageService } from './error-message.service'
import { UserLoginStateService } from './user-login-state.service'

import { CartProducts, ShoppingCartModel } from '../store/models/shoppingCartModel'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private mainEndpoint = 'http://192.168.0.11:5000' || 'http://localhost:5000'
  private cartEndpoint = '/cart';
  public flag: boolean;

  constructor (
    private http: HttpClient,
    private messageService: MessageService,
    private productService: ProductService,
    private userLoginState: UserLoginStateService
  ) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
  }

  updatedCart: any = null
  user: any = this.userLoginState.getUser()

  cartProductList: CartProducts[] =
  this.updatedCart !== null
    ? this.updatedCart.products
    : [];

  shoppingCart: ShoppingCartModel = {
    _id: this.user !== null ? this.user.id : null,
    nbtotalproducts: this.updatedCart !== null
      ? this.updatedCart.nbtotalproducts
      : null,
    price: this.updatedCart !== null
      ? this.updatedCart.price
      : null,
    'price-float': this.updatedCart !== null
      ? this.updatedCart['price-float']
      : null,
    'shipping-price': 4.90,
    products: this.cartProductList
  }

  log (message: string[]): void {
    this.messageService.add(message)
  }

  saveCurrentCart (shoppingCart:any): Observable<any> {
    const url = `${this.mainEndpoint}${this.cartEndpoint}`
    return this.http.post<any>(url, shoppingCart).pipe(
      tap(cart => {
        this.updatedCart = cart
      }),
      catchError(async (error) => {
        this.log(
          error.error.errors
            .map((error: any) => error.msg)
        )
      })
    )
  }

  updateShoppingCart (cartList: any) {
    this.shoppingCart.nbtotalproducts = cartList.reduce((acc: number, currentValue: any): number => acc + currentValue.quantity, 0)
    this.shoppingCart.price = Number(cartList.reduce((acc: number, currentValue: any): number => acc + currentValue.price, 0).toFixed(2))
    this.shoppingCart['price-float'] = Number(cartList.reduce((acc: number, currentValue: any): number => acc + currentValue['price-float'], 0).toFixed(2))
    this.saveCurrentCart(this.shoppingCart).subscribe()
  }

  updateCartProductList (product: any) {
    this.cartProductList.forEach((item) => {
      if (
        item.id === product._id &&
          item.quantity < product.stock &&
          product['product-status'] === true
      ) {
        item.quantity++
        item.price = product.price * item.quantity
        item['price-float'] = Number(((product.price / 1.21) * item.quantity).toFixed(2))
      }
    })
    this.updateShoppingCart(this.cartProductList)
  }

  pushNewProduct (product: any) {
    this.cartProductList.push({
      id: product._id,
      quantity: 1,
      price: product.price,
      'price-float': Number((product.price / 1.21).toFixed(2)),
      image: product.images[0],
      name: product.name,
      'product-status': product['product-status']
    })
  }

  addProductCart (productId: string): void {
    this.productService.getProductById(productId).subscribe((product) => {
      if (this.cartProductList.find((cartList) =>
        cartList.id === product._id) === undefined
      ) {
        this.pushNewProduct(product)
        this.updateShoppingCart(this.cartProductList)
        return true
      }
      this.updateCartProductList(product)
    })
  }
}
