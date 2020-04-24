import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Angular material
import { MaterialModule } from "./material-module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductsComponent } from "./components/products/products.component";
import { SigninComponent } from "./components/signin/signin.component";
import { MattressComponent } from "./components/mattress/mattress.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { BoxSpringComponent } from './components/box-spring/box-spring.component';
import { MattressDetailComponent } from './components/mattress/mattress-detail/mattress-detail.component';

import { AuthGuard } from './auth.guard';
// TOKEN INTERCEPTOR
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UpdateProductComponent } from './components/update-product/update-product.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SigninComponent,
    MattressComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsListComponent,
    ProductDetailComponent,
    BoxSpringComponent,
    MattressDetailComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents:[
    ProductDetailComponent,
    UpdateProductComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
