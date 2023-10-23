import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { User } from '../models/User';
import { UserAPICallsService } from '../Services/user-apicalls.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent {
userDetails:Array<any>=[]; 
constructor(private userAPICallsService:UserAPICallsService)
{
  this.FetchLatestUsers();
 

}

DeleteUser(user:any)
{
  console.log(user);
  this.userAPICallsService.DeleteUser(user.email).subscribe(y=>{
    alert(y);
    this.FetchLatestUsers();
    let router=new Router()
    router.navigate(['/showUsers'])
  });

}

FetchLatestUsers()
{
  this.userAPICallsService.GetUsers().subscribe(x=>{
    this.userDetails=x as Array<any>;
    //console.log(this.userDetails);
   })
}

}
