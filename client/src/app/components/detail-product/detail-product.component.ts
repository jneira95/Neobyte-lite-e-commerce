import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { ProductItem } from '../../store/models/product-item-model'

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
  constructor (
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  get paramId (): string {
    return this.route.snapshot.paramMap.get('id')
  }

  product$: Observable<ProductItem> = this.productService.getProductById(
    this.paramId
  );
}
