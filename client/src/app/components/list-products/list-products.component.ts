import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { IProductItem } from '../../store/models/product-item-model'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  productList$: Observable<IProductItem>

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.productList$ = this.route.queryParams.pipe(switchMap(() => {
      return this.productService.getProductByQuery(this.currentQuery)
    }))
  }

  get currentQuery (): string {
    return this.router.url.split('?')[1]
  }
}
