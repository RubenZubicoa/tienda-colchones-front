import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { MattressComponent } from './components/mattress/mattress.component';
import { MattressDetailComponent } from './components/mattress-detail/mattress-detail.component';

// Auth guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'login',
    component:SigninComponent
  },
  {
    path:'colchones',
    component:MattressComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'colchones/:id',
    component:MattressDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
