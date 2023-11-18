import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { cart } from '../shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart!:cart;
  cartChangeQuant!:number;
  constructor(private route:ActivatedRoute,private foodService:FoodService,private cartservice:CartService,private router:Router){

  }
ngOnInit():void{
//for development have to remove
/*let item1=new cartItem(this.foodService.getFoodById(1));
this.cartservice.addToCart(item1);
let item2=new cartItem(this.foodService.getFoodById(2));
this.cartservice.addToCart(item2);*/
//---------


  this.route.params.subscribe(params=>{
    if(params['foodid'])
    {
      console.log(params['foodid']);
     let item=new cartItem(this.foodService.getFoodById(params['foodid']));
      this.cartservice.addToCart(item);
      alert("Succesfully Added food to the cart!");
      this.router.navigateByUrl("/");
    }
  })

  this.route.url.subscribe(segments=>{
    const pathSegments = segments.map((segment) => segment.path);
    
    if (pathSegments.includes('cart-page')) {
     this.cart=this.cartservice.getcart();
     console.log(this.cart);
    }
  })
}
cartChangeQuantity(foodid:number,quantity:number):void{
console.log(this.cartChangeQuant);
this.cartservice.increasequantityfromcart(foodid,quantity);
  }

  removefromcart(foodid:number):void{
    this.cartservice.removeFromcart(foodid);
  }

  getnoofcartItems():number{
    return this.cartservice.getcart().items.length;
  }
  homepage():void{
    this.router.navigateByUrl('/');
  }
}
