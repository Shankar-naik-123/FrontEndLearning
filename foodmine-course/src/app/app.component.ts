import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodmine-course';
  loggedIn:boolean=false;

  ngOnInit():void{
   this.loggedIn=(localStorage.getItem('authToken')!=null);
    console.log(this.loggedIn);
  }
  public LoggedIn():void{
    
    this.loggedIn=(localStorage.getItem('authToken')!=null);
  }

  public LoggedOut():void{
   
    this.loggedIn=(localStorage.getItem('authToken')!=null);
  }
 
  
}
