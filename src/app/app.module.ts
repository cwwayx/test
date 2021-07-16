import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '_@angular_forms@12.0.5@@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { TemplateFormComponent } from './container/components/form/template-form.component';
import { IndexComponent } from './container/components/index/index.component';
import { RepeatValidatorDirective } from './container/validator/repeat-validator.directive';
import { ReactiveFormComponent } from './container/components/form/reactive-form.component'; 

@NgModule({
  declarations: [ 
    IndexComponent, 
    TemplateFormComponent, 
    RepeatValidatorDirective, 
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
