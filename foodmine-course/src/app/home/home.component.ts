import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(private foodService:FoodService,private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit():void{
   
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      {
        this.foods=this.foodService.getAll().filter(food=>food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }
      else if(params['tag'])
      {
        this.foods=this.foodService.getAllFoodsByTag(params['tag']);
      }
      else{
        this.foods=this.foodService.getAll();
      }
    })

  }

  ManageFood():void{
    this.router.navigateByUrl('managefood');
  }

}
