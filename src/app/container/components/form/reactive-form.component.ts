import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,ValidationErrors,AbstractControl,FormArray } from '@angular/forms';
import { User } from '../../entities/User';  
import {RepeatValidatorDirective} from '../../validator/repeat-validator.directive'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'] 
})
export class ReactiveFormComponent implements OnInit {

  user: FormGroup; 

  constructor(private fb: FormBuilder) { 

  }

  validateGroup(password: string,confirmPassword: string): ValidationErrors | null {
    return (group: FormGroup): { [key: string]: any } => {
      const passwordValue = group.controls[password]?group.controls[password].value:'';
      const confirmPasswordValue = group.controls[confirmPassword]?group.controls[confirmPassword].value:'';
      if(passwordValue !== confirmPasswordValue){
          return { validateEqual:true};
      }
      return null;
    }
  }

  ngOnInit(): void {
    this.user = this.fb.group(
      {
        email: ['',[Validators.required,Validators.pattern(/([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}/)]],
        password: ['',Validators.required],
        repeat: ['',Validators.required],
        addrs:this.fb.array([])
      },
      {validator: this.validateEqual('password','repeat')}
    );
    this.user.controls['email'].valueChanges.subscribe((value)=>{
      console.log(value);
    })
  }

  addAddr(): void{
      (<FormArray> this.user.controls['addrs']).push(
        this.fb.group({
          province:[],
          city:[],
          area:[],
          addr:[]
        })
      );
  }
 

  
validateEqual(passwordKey: string,confirmPasswordKey: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];
    if(password.value !== confirmPassword.value){
      return {validateEqual: true};
    }
    return null;
  };
}

}


export interface ValidatorFn  {
  (c: AbstractControl): ValidationErrors | null;
}
 