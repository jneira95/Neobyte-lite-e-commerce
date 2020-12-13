import { Component } from '@angular/core'
import { ShoppingCartService } from '../../services/shopping-cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private flag: boolean
  constructor (private shoppingCartService: ShoppingCartService) {
    this.flag = this.shoppingCartService.flag
  }

  cartList: string[] = ['1', '2', '3', '4']
}
