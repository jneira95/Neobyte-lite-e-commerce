import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { UserLoginStateService } from '../../services/user-login-state.service'
import { ShoppingCartModel } from '../../store/models/shoppingCartModel'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public flag: boolean
  private currentUser: any

  constructor (
    private shoppingCartService: ShoppingCartService,
    private userLoginState: UserLoginStateService
  ) {
    console.log('contructor', this.flag)
  }

  shoppingCart$: Observable<ShoppingCartModel> = this.shoppingCartService.getUserShoppingCart(this.myuser)

  get myuser () {
    console.log('myuser')
    let user: any
    this.userLoginState.getLocalUser().subscribe((user) => {
      this.currentUser = user.id
    })
    return this.flag ? user.id : null
  }

  incrementProductUnits (id: string) {
    const increment = 'INCREMENT'
    // this.userShoppingCart$ = this..map((cartList) => {
    //   if (cartList.id === id) {
    //     cartList.quantity++
    //   }
    //   return cartList
    // })
    this.shoppingCartService.addProductCart(id, increment)
  }

  decrementProductUnits (id: string) {
    const decrement = 'DECREMENT'
    // this.cartProductList = this.cartProductList.map((cartList) => {
    //   if (cartList.id === id) {
    //     cartList.quantity--
    //   }
    //   return cartList
    // })
    this.shoppingCartService.addProductCart(id, decrement)
  }

  ngOnInit ():void {
    this.userLoginState.getValue().subscribe((value) => {
      this.flag = value
    })
    console.log('onInit', this.flag)
  }
}
