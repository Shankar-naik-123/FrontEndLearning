import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { ManageFoodsComponent } from './manage-foods/manage-foods.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'tag/:foodName/food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartComponent},
  {path:'addtocart/:foodid',component:CartComponent},
  {path:'app',component:AppComponent},
  {path:'managefood',component:ManageFoodsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
