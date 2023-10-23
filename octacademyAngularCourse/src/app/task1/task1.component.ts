import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  postTitle:string='';
postDetails:string='';
imageUrl:string='';
hypelink:string='';
addBackground:boolean=false;

}
