import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product-general-specs',
  templateUrl: './product-general-specs.component.html',
  styleUrls: ['./product-general-specs.component.scss']
})
export class ProductGeneralSpecsComponent {
  @Input() brand: string;
  @Input() reference: string;
  @Input() generalSpecs: string[]
}
