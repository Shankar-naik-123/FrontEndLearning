//FOR TEMPLATE DRIVEN FORM -------

/*import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  OnSubmit(data:NgForm)
  {
    console.log(data.value);
  }
  getValue(f:any)
  {
    //console.log(f);
  }

}*/

//FOR REACTIVE FORM 
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
//to use formBuilder
import { FormBuilder } from '@angular/forms';

//for Custom validator 
import {noSpace} from '../validators/nospace.validators'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  form:any;
  phoneNoRegex:string="[789][0-9]{9}"

  //Without using formBuilder
  /*constructor()
  {
   this.form=new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    contactDetails:new FormGroup({
      address:new FormControl('',Validators.required),
      shippingAddress:new FormControl('',Validators.required),
      phoneNo:new FormControl('',[Validators.required,Validators.pattern(this.phoneNoRegex)])
    }),
    skills:new FormArray([])
   });
  }*/

  //using FormBuilder
  constructor(fb:FormBuilder)
  {
this.form=fb.group({
  fullName:['',[Validators.required,Validators.minLength(5),noSpace.noSpaceValidation]],
  email:['',[Validators.required,Validators.email]],
  contactDetails:fb.group({
    address:['',Validators.required],
    shippingAddress:['',Validators.required],
    phoneNo:['',[Validators.required,Validators.pattern(this.phoneNoRegex)]]
  }),
  skills:fb.array([])
});
  }

  get FullName(){
    return this.form.get('fullName')
  }
  get Email(){ 
    return this.form.get('email')
  }

  get Address()
  {
    return this.form.get('contactDetails.address');
  }
  get ShippingAddress()
  {
    return this.form.get('contactDetails.shippingAddress');
  }
  get PhoneNo()
  {
    return this.form.get('contactDetails.phoneNo');
  }


  OnSubmit()
  {
    console.log(this.form.value);
  }



  get Skills()
  {
    return this.form.get('skills') as FormArray;
  }


  AddSkills(skill:HTMLInputElement)
  {
    this.Skills.push(new FormControl(skill.value));
    skill.value=''
    //console.log(this.Skills.value);
  }

  RemoveSkill(index:number)
  {
   this.Skills.removeAt(index);
  }


}