import { Food } from "./Food";

export class cartItem{
    food!:Food;
    quantity:number;
   price:number=0;
constructor(food:Food,quantity:number=1)
{
    this.food=food
    this.price=quantity*food.price;
    this.quantity=quantity;
}

}