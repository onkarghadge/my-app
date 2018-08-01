import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { AppService } from './app.service';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    // throw new Error("Method not implemented.");
  }
  title = 'project';
}
