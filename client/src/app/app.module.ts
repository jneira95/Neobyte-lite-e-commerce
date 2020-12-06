import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { DetailProductComponent } from './components/detail-product/detail-product.component'
import { SideNavbarComponent } from './components/header/side-navbar/side-navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { SearchComponent } from './components/header/search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { ImagesGalleryComponent } from './components/detail-product/images-gallery/images-gallery.component'
import { MatButtonModule } from '@angular/material/button'
import { PriceDisplayComponent } from './components/detail-product/price-display/price-display.component'
import { ProductShippingInfoComponent } from './components/detail-product/product-shipping-info/product-shipping-info.component'
import { ProductGeneralSpecsComponent } from './components/detail-product/product-general-specs/product-general-specs.component'
import { ProductFeaturePaymentsComponent } from './components/detail-product/product-feature-payments/product-feature-payments.component'
import { ProductDescriptionComponent } from './components/detail-product/product-description/product-description.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarComponent,
    DetailProductComponent,
    SearchComponent,
    ImagesGalleryComponent,
    PriceDisplayComponent,
    ProductShippingInfoComponent,
    ProductGeneralSpecsComponent,
    ProductFeaturePaymentsComponent,
    ProductDescriptionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
