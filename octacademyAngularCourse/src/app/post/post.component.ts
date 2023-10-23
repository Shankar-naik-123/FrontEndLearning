import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {


  @Input()
  postComponentTitle:string='';

  @Output()
  messageFromChild=new EventEmitter<string>();

  constructor(){}

 dataFromChild:string='This is the Data from Child Post component via OutPut decorator';
  postParentData:string="This is from Post Parent Component";
  title:String="The List of Posts"
  postChildDataToParentapp:string='This is from Child Post Component'; 
  Adress:string='Berlin, Spain';
  lastName:string='';

  SendMessage() {
console.log(this.dataFromChild);
this.messageFromChild.emit(this.dataFromChild);
}

OnKeyUpEvent() {
  
  console.log("KeyPressed");
  }

  OnKeyUpEventWithParam(username:string) {
   console.log(username);
    }

    SendLastName() {
    console.log(this.lastName);   
}
sendAdress()
{
  console.log(this.Adress);
}
}
