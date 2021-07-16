import { Component, OnInit } from '@angular/core';   
import { User } from '../../entities/User';  

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
  
})
export class TemplateFormComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    repeat: '',
    address: {
      province: '2',
      city: '1',
      area: '1',
      addr: ''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit({value, valid}, event: Event) {
    if(valid){
      console.log(value);
    }
    event.preventDefault();
  }
  
}
