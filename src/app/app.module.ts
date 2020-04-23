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

import { AuthGuard } from './auth.guard';
// TOKEN INTERCEPTOR
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';


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
    ProductDetailComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
