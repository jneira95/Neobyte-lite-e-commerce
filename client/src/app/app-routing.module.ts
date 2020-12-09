import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailProductComponent } from './components/detail-product/detail-product.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginAccessGuard } from './login-access.guard'
import { AuthGuard } from './auth-access.guard'

const routes: Routes = [
  { path: 'detail/:id', component: DetailProductComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [LoginAccessGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [LoginAccessGuard] },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'detail', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
