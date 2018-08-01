import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './modules/template/template.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from 'src/app/services/template.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'template', component: TemplateComponent },
  // { path: 'add-template', component: AddTemplateComponent },
  // { path: '', redirectTo: '/template', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      HttpClientModule,
      ReactiveFormsModule, FormsModule ,
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes),
    BrowserModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule, FormsModule    
  ],
  providers: [FormBuilder, TemplateService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
