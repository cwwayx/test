import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '_@angular_forms@12.0.5@@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TemplateFormComponent } from './container/components/form/template-form.component';
import { IndexComponent } from './container/components/index/index.component'; 

@NgModule({
  declarations: [ 
    IndexComponent, 
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
