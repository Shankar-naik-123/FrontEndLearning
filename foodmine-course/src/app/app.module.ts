import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './tag/tag.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartComponent } from './cart/cart.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ManageFoodsComponent } from './manage-foods/manage-foods.component'
import { JwtInterceptorService } from './services/Auth/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodpageComponent,
    CartComponent,
    LoginComponent,
    ManageFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
