import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { MattressComponent } from './components/mattress/mattress.component';

// Auth guard
import { AuthGuard } from './auth.guard';
import { BoxSpringComponent } from './components/box-spring/box-spring.component';
import { MattressDetailComponent } from './components/mattress/mattress-detail/mattress-detail.component';
import { BoxSpringDetailComponent } from './components/box-spring/box-spring-detail/box-spring-detail.component';


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
    canActivate: [AuthGuard],
  },
  {
    path:'colchones/:id',
    component:MattressDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'somieres',
    component:BoxSpringComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'somieres/:id',
    component: BoxSpringDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
