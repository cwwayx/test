import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,ValidationErrors } from '@angular/forms';
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
        email: ['',[Validators.required,Validators.email]],
        password: ['',Validators.required],
        repeat: ['',Validators.required],
        address: this.fb.group({
          province: [],
          city: [],
          area: [],
          address: []
        })
      },
      //{validator: this.validateGroup('password','repeat')}
    );
  }

}
