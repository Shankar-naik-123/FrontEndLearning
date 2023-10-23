import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-implement-observable',
  templateUrl: './implement-observable.component.html',
  styleUrls: ['./implement-observable.component.css']
})
export class ImplementObservableComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

    //Observable
    /*observable is library that is from Javascript RXjs not from Angular
    It's a sequence of  data that is emitted either synchronously or asynchronously over the period of time 
    we use $ along with observable object as naming convention below is the way how we write observable.
    It is the most same as Javascript fucntion. we have to  import Observable from rxjs as we did at the top.
    like how we call the function to invoke the function the same way we have to use .subscribe() with observable to invoke that. 
    without .subscribe() observable won't gets invoked.
    */

    /*const data$ = new Observable(observer => {
      console.log("This is the message from ImplementObservableComponent observable");
    }).subscribe();*/

    //Normal function
    /*const func = function LogSomething() {
      console.log("This is the message from ImplementObservableComponent function");
    }
    func();*/



    /*Above we have written void observable and function . Now we will see how to return 
    a value and consume that  from observable . 
    we use observer.next("") to return from observable and we can consune that return item in subscribe()*/

    /*const data$ = new Observable(observer => {
       observer.next("This is the message1 returned from ImplementObservableComponent observable");
    }).subscribe(value=>console.log(value));

    //In Normal function 

    const func = function LogSomething() {
      return "This is the message1 from ImplementObservableComponent function";
    }
    console.log(func());
  }*/

  /*Why do we need observable if it works same as javascript function?
  The reason is JavaScript function can return the item only once but using observable we can
  return any no of lines.
  that what standard defination says:
  "It's a sequence of  data that is emitted either synchronously or asynchronously 
  over the period of time "
below we can see that 
  */ 
 const data$ = new Observable(observer => {
       observer.next("This is the message1 returned from ImplementObservableComponent observable");
       observer.next("This is the message2 returned from ImplementObservableComponent observable");
    }).subscribe(value=>console.log(value));

    //In Normal function 

    const func = function LogSomething() {
      return "This is the message1 from ImplementObservableComponent function";
      return "This is the message2 from ImplementObservableComponent function";

    }
    console.log(func());
  }


}


