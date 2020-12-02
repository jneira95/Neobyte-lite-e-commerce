import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { SideNavbarComponent } from './components/header/side-navbar/side-navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SideNavbarComponent,
		DetailProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatToolbarModule,
		MatDividerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
