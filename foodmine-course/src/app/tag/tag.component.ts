import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  constructor(private foodService:FoodService){

  }
  tags: { [key: string]: number } = {};

ngOnInit():void{
  let foods=this.foodService.getAll();
  foods.forEach(food=>{
    food.tags?.forEach(tag=>{
      if(this.tags[tag])
      {
        this.tags[tag]=this.tags[tag]+1
      }
      else{
        this.tags[tag]=1
      }
    })
  })

  let totaltags:number= Object.values(this.tags).reduce((sum, value) => sum + value, 0);;
  this.tags["All"]=totaltags;

  console.log(this.tags)
}


}
