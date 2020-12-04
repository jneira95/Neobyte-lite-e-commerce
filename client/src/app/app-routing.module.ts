import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailProductComponent } from './components/detail-product/detail-product.component'

const routes: Routes = [
  { path: 'detail/:id', component: DetailProductComponent },
  { path: '', redirectTo: '/detail/5fc8a5da1ecafd082aa42a68', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
