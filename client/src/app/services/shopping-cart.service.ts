import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { ProductService } from './product.service'
import { MessageService } from './error-message.service'
import { UserLoginStateService } from './user-login-state.service'

import { CartProducts, ShoppingCartModel } from '../store/models/shoppingCartModel'
import { IProductItem } from '../store/models/product-item-model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private mainEndpoint = 'http://192.168.0.11:5000' || 'http://localhost:5000'
  private cartEndpoint = '/cart';
  private flag: boolean = false

  constructor (
    private http: HttpClient,
    private messageService: MessageService,
    private productService: ProductService,
    private userLoginState: UserLoginStateService
  ) {
    this.userLoginState.getValue().subscribe(isUserLogged => {
      this.flag = isUserLogged
      if (isUserLogged) {
        this.user = this.userLoginState.getUser()
        this.getUserShoppingCart(this.user.id).subscribe((userShoppingCart) => {
          if (userShoppingCart) this.updatedCart = userShoppingCart
        })
      }
    })
  }

  user: any = this.getUserShoppingCart(this.myUser)

  updatedCart: ShoppingCartModel | null = null

  get myUser () {
    const user = this.userLoginState.getUser()
    return this.flag ? user.id : null
  }

  log (message: string[]): void {
    this.messageService.add(message)
  }

  getUserShoppingCart (userId: string): Observable<ShoppingCartModel> {
    console.log('getUserShoppingCart', userId)
    const url = `${this.mainEndpoint}${this.cartEndpoint}/${userId}`
    return this.flag && this.http.get<ShoppingCartModel>(url)
  }

  saveCurrentCart (shoppingCart:any): Observable<any> {
    console.log('')
    const url = `${this.mainEndpoint}${this.cartEndpoint}`
    return this.http.post<any>(url, { ...shoppingCart, _id: this.flag ? this.user.id : null }).pipe(
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

  updateShoppingCart (currentCartProductList: CartProducts[]) {
    console.log('updateShoppingCart')
    const shoppingCartModel: ShoppingCartModel = {
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
      products: currentCartProductList
    }
    shoppingCartModel.nbtotalproducts = currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue.quantity, 0)

    shoppingCartModel.price = Number(currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue.price, 0).toFixed(2))

    shoppingCartModel['price-float'] = Number(currentCartProductList.reduce(
      (acc: number, currentValue: any): number =>
        acc + currentValue['price-float'], 0).toFixed(2))

    this.saveCurrentCart(shoppingCartModel).subscribe()
  }

  updateCartProductList (
    product: any = null,
    cartProductList: CartProducts[],
    change: string,
    productId: string
  ) {
    console.log('updateCartProductList')
    const currentCartProductList = cartProductList
    let noStock: boolean
    currentCartProductList.forEach((item) => {
      switch (change) {
        case 'INCREMENT':
          if (
            item.id === product._id &&
            item.quantity < product.stock &&
            product['product-status'] === true
          ) {
            console.log('updateCartProductList --> INCREMENT')
            noStock = false
            item.quantity++
            item.price = product.price * item.quantity
            item['price-float'] = Number(((product.price / 1.21) *
              item.quantity).toFixed(2))
          } else {
            noStock = true
          }
          break
        case 'DECREMENT':
          if (
            item.id === productId
          ) {
            console.log('updateCartProductList --> DECREMENT')
            item.quantity--
            item.price = product.price * item.quantity
            item['price-float'] = Number(((product.price / 1.21) *
            item.quantity).toFixed(2))
          }
          break
        default:
          break
      }
    })
    console.log(noStock)
    if (!noStock) this.updateShoppingCart(currentCartProductList)
  }

  pushNewProduct (product: any, cartProductList: CartProducts[]) {
    console.log('pushNewProduct')
    const currentCartProductList = cartProductList
    currentCartProductList.push({
      id: product._id,
      quantity: 1,
      price: product.price,
      'price-float': Number((product.price / 1.21).toFixed(2)),
      image: product.images[0],
      name: product.name,
      'product-status': product['product-status']
    })
    this.updateShoppingCart(currentCartProductList)
  }

  addProductCart (productId: string, change: string = 'INCREMENT'): void {
    console.log('addProductCart')
    const cartProductList: CartProducts[] = this.updatedCart !== null
      ? this.updatedCart.products
      : []
    this.productService.getProductById(productId)
      .subscribe((product: IProductItem) => {
        switch (change) {
          case 'INCREMENT':
            console.log('INCREMENT')
            if (cartProductList.find((cartList) =>
              cartList.id === product._id) === undefined
            ) {
              this.pushNewProduct(product, cartProductList)
              return true
            }
            this.updateCartProductList(product, cartProductList, change, null)
            break
          case 'DECREMENT':
            this.updateCartProductList(
              product, cartProductList, change, productId
            )
            break
          case 'REMOVE':
            break
          default:
            break
        }
      })
  }
}
