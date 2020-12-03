import { Component, OnInit } from '@angular/core'
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  constructor () {} // private route: ActivatedRoute // private productService: ProductService,

  ngOnInit (): void {}

  getClickTest (): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.ProductService.getHero(id).subscribe((product) => {
    // this.product = product;
    // });
  }
}
