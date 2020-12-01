import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { HeaderComponent } from './core/header/header.component';

const routes: Routes = [
	{ path: '', component: HeaderComponent },
	{ path: 'detail', component: DetailProductComponent }
	// { path: '', redirectTo: '/detail', pathMatch: 'full' }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
