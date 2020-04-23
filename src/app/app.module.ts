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
import { MattressDetailComponent } from "./components/mattress-detail/mattress-detail.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';

import { AuthGuard } from './auth.guard';
// TOKEN INTERCEPTOR
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SigninComponent,
    MattressComponent,
    MattressDetailComponent,
    SidenavComponent,
    ProductCardComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
