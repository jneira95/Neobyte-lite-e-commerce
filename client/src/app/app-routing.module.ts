import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailProductComponent } from './components/detail-product/detail-product.component'

const routes: Routes = [
  { path: 'detail/:id', component: DetailProductComponent },
  { path: '', redirectTo: '/detail/', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
