import { Component } from '@angular/core';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-manage-foods',
  templateUrl: './manage-foods.component.html',
  styleUrls: ['./manage-foods.component.css']
})
export class ManageFoodsComponent {
 constructor(private authService:AuthService)
 {

 }
  public AddFood():void{
   this.authService.AddFood("food").subscribe(x=>{
    alert(x);
    console.log(x);
   })
  }
}
