import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './modules/template/template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from 'src/app/services/template.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MentionModule } from './directives/mention';

const appRoutes: Routes = [
  { path: 'template', component: TemplateComponent },
  // { path: 'add-template', component: AddTemplateComponent },
  // { path: '', redirectTo: '/template', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    MentionModule ,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule
  ],
  providers: [FormBuilder, TemplateService],

  bootstrap: [AppComponent]
})
export class AppModule { }
