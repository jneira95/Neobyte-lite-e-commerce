import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { IProductItem } from '../../store/models/product-item-model'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  constructor (
     private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit (): void {
  }

  // get paramId (): string {
  // return this.route.snapshot.paramMap.get('id')
  // }

  productList$: Observable<IProductItem> = this.productService.getProductList();
}
