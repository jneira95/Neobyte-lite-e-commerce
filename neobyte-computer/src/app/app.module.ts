import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { SideNavbarComponent } from './components/header/side-navbar/side-navbar.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		// FooterComponent,
		SideNavbarComponent,
		DetailProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatToolbarModule,
		MatDividerModule,
		MatExpansionModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
