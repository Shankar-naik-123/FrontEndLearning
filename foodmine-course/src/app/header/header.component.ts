import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username:string;
  tokenReader= new JwtHelperService();
  constructor(private appComponent:AppComponent,private routerLink:Router){

    //decrypt token
let token=localStorage.getItem('authToken');
let tokenInfo=(token==null)?'':this.tokenReader.decodeToken(token)!;
this.username=tokenInfo["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
  }
  logout():void{
    localStorage.removeItem('authToken');
    
    this.appComponent.LoggedOut();
  }

  
}
