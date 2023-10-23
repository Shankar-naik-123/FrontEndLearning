import { Component } from '@angular/core';
import { UserAPICallsService } from '../Services/user-apicalls.service';
import { User } from '../models/User';
import { ShowUsersComponent } from '../show-users/show-users.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

constructor(private userAPICallsService:UserAPICallsService) {
 
  
}
   name:string='';
   email:string='';
   address:string='';

   response:any=null;

   userDetails:Array<User>=[];
   public AddUser()
  { 
    
   //this.userDetails.push({'Name':this.name,'Email':this.email,'Address':this.address});
    
   var user:User={Name:this.name,Email:this.email,Address:this.address};
   this.userAPICallsService.AddUser(user).subscribe(res=>{
    let showUsersComponent=new ShowUsersComponent(this.userAPICallsService);
    showUsersComponent.FetchLatestUsers();
    console.log(res);
    alert(res);

   });
  
  }
  // DeleteUser(user:any)
  // {
  //   this.userDetails.splice(user,1);
  // }
  // getUsers()
  // {
  //  this.userAPICallsService.GetUsers().subscribe(x=>{
  //  // console.log(x);
  //   this.userDetails=x as Array<User>;
  //   console.log(this.userDetails);
  //  })
  // }

}
