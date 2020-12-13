import { Injectable } from '@angular/core'
import { UserLoginStateService } from './user-login-state.service'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
    public flag: boolean;
    constructor (private userLoginState: UserLoginStateService) {
      this.userLoginState.getValue().subscribe((value: boolean) => {
        this.flag = value
      })
    }

    currentCart: string[] = []

    addProductCart (product: string): void {
      this.currentCart.push(product)
      console.log(this.currentCart)
    }
}
