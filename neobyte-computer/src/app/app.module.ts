import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './modules/detail-product/detail-product.component';
import { ImagesGalleryComponent } from './modules/detail-product/images-gallery/images-gallery.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { reducers, metaReducers } from './reducers';

@NgModule({
	declarations: [
		AppComponent,
		DetailProductComponent,
		ImagesGalleryComponent,
		FooterComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		StoreModule.forRoot(reducers, {
			metaReducers
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
