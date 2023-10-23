import { AfterViewInit, Component ,ViewChild, ViewChildDecorator} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'AngIntro';
  postComponentTitle:string='This is the title from App Component';
  dataFromPostChildviaOutpotDecor:string='';
  bool:boolean=false;
  imgUrl:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sF437eIJagjekeoWmziMoadRWXlEWb_QXddH0NtGsw&s';

  //City name for Custom pipes practice
  city={
    name:'Texas',
    about:"Texas is a state in the South Central region of the United States. At 268,596 square miles, and with more than 30 million residents in 2023, it is the second-largest U.S. state by both area and population."
};

stringArray1:Array<string>=['Post1','Post2','Post3'];
objects:Array<any>=[
  {id:1,title:'Post1'},{id:2,title:'Post2'},{id:3,title:'Post3'}
]

formStep:string="Something Else";

  dataFromPostChild:string='';
  @ViewChild(PostComponent) postChildData!:PostComponent;

  constructor(){
    console.log(this.postChildData)
  }

  ngAfterViewInit(){
    console.log(this.postChildData);
    this.dataFromPostChild=this.postChildData.postChildDataToParentapp;
    }

    RecieveMessage($event: string) {
this.dataFromPostChildviaOutpotDecor=$event;
}

AddPost(){
  this.stringArray1.push('Post10');
}

RemovePost(index:any)
{

this.stringArray1.splice(index,1);

}
setStep(step:string)
{
this.formStep=step;
}
}
