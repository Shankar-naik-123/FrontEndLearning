import { cartItem } from "./cartItem";

export class cart{
    items!:cartItem[];
    noOfItems!:number;
    totalAmount!:number

    constructor(){
      this.items=[];
    }
}