import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sharepage/home/home.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddtoCartComponent } from './product/addto-cart/addto-cart.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { newAuthGuard } from './Guard/new-auth.guard';


const routes: Routes = [
  // default routing
  {
    path:"",component:HomeComponent
  },
  //static routing
  {
    path:'dashboard', component:ProductDashboardComponent, canActivate: [newAuthGuard]
  },
  {
    path:'details',component:ProductDetailsComponent
  },
  {
    path:'add-to-cart',component:AddtoCartComponent
  },
  {
    path:'add-product',component:AddProductComponent
  },
  {
    path:'update-product/:id',component:UpdateProductComponent
  },

  //lazy loading

  {
    path:'auth',loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule)
  },

  //wild card routing -- page not found
  {
    path:"**", component:PageNotFoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
