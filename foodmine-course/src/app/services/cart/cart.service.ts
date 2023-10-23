import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { cart } from 'src/app/shared/models/cart';
import { cartItem } from 'src/app/shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems!: cart;
  constructor() {
    this.cartItems = new cart();
  }

  getcart() {
    return this.cartItems;
  }

  increasequantityfromcart(foodid: number, quantity: number) {
    if (this.cartItems.items.filter((item) => item.food.id == foodid)) {
      this.cartItems.items.forEach((item) => {
        if (item.food.id == foodid) {
          item.quantity =  quantity;
          item.price = item.food.price * quantity;

          let totItems:number=0;
       let totAmount:number=0;
       this.cartItems.items.forEach(i=>{
        totItems=totItems+i.quantity;
        totAmount=totAmount+i.price
      });
       this.cartItems.noOfItems=totItems;
       this.cartItems.totalAmount=totAmount;
        }
      });
       
    }
  }
  addToCart(cartItem: cartItem) {

    if(this.cartItems.items.filter((item) => item.food.id == cartItem.food.id).length>=1) 
    {
      this.cartItems.items.forEach((item) => {
        if (item.food.id == cartItem.food.id) {
          item.quantity = item.quantity + 1;
          item.price += cartItem.food.price;
          this.cartItems.noOfItems += 1;
          this.cartItems.totalAmount += item.food.price * 1;
        }
      });
    } 
    else 
    {
      this.cartItems.items.push(cartItem);
        if(this.cartItems.noOfItems){
          this.cartItems.noOfItems=this.cartItems.noOfItems+1;
        }else{ this.cartItems.noOfItems=1}
      let sum: number = 0;
      this.cartItems.items.forEach((x) => {
        sum = sum + x.price;
      });
      this.cartItems.totalAmount = sum;
    }
  }

  removeFromcart(foodid:number){
    this.cartItems.items =this.cartItems.items.filter(obj => obj.food.id !== foodid);
    
    let totItems:number=0;
       let totAmount:number=0;
       this.cartItems.items.forEach(i=>{
        totItems=totItems+i.quantity;
        totAmount=totAmount+i.price
      });
       this.cartItems.noOfItems=totItems;
       this.cartItems.totalAmount=totAmount;
  }
}
