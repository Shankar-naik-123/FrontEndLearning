import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {

 declare food:Food;
  constructor(private route:ActivatedRoute,private foodService:FoodService,private router:Router){

  }
  ngOnInit():void{
    this.route.params.subscribe(param=>{
      if(param['id'])
      {
      this.food=this.foodService.getFoodById(param['id']);
      }
    })
  }

  addToCart(foodid:number):void{
    this.router.navigateByUrl('addtocart/'+foodid)
  }

}
