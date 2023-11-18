import { Component } from '@angular/core';
import { User } from '../shared/models/User';
import { AuthService } from '../services/Auth/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService,private router:Router,private appComponent:AppComponent){

  }
user:User=new User();

login():void{
this.authService.login(this.user).subscribe(x=>{
localStorage.setItem('authToken',x);
this.appComponent.LoggedIn();
})
}
}
