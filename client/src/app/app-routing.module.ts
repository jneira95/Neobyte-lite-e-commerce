import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailProductComponent } from './components/detail-product/detail-product.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'detail/:id', component: DetailProductComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
