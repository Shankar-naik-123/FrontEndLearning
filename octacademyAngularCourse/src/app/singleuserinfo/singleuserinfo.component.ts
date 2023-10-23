import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserAPICallsService } from '../Services/user-apicalls.service';
import { __values } from 'tslib';
import { ShowUsersComponent } from '../show-users/show-users.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singleuserinfo',
  templateUrl: './singleuserinfo.component.html',
  styleUrls: ['./singleuserinfo.component.css']
})
export class SingleuserinfoComponent {
  itemIndex:number=999;
  _userDetailsComponent:any;
   user:any;
   TempName:string='';
   TempEmail:String='';
   TempAddress:string='';
  constructor(private route:ActivatedRoute,private userAPICallsService:UserAPICallsService) {
    this.route.paramMap.subscribe(x=>{
     console.log(x.get('email'));
    userAPICallsService.GetUser(x.get('email') as string).subscribe(y=>{
      this.user=y as Object
      this.TempName=this.user.name;
      this.TempEmail=this.user.email;
      this.TempAddress=this.user.address;
     
    })
    });

    /*Below  queryparam got nothing to do with the flow. Just added to see how to pass 
    and consume the query parameters */
    // this.route.queryParamMap.subscribe(value=>{
    //   console.log(value.get('Page'));
    //   console.log(value.get('Orderby'));
      
    // }
    //   )
    
  }

  UpdateUserInfo()
  {
    this.user.name=this.TempName;
    this.user.Address=this.TempAddress
    this.userAPICallsService.UpdateUser(this.user).subscribe(x=>{
      
      //let showUsersComponent=new ShowUsersComponent(this.userAPICallsService,router);
      //showUsersComponent.FetchLatestUsers();
      let router=new Router();
      router.navigate(['/showUsers']);
      alert(x as string);
    })
  }

}
