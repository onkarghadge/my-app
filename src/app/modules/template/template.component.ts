import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from 'src/app/services/template.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  modalRef: NgbModalRef;
  mainForm: FormGroup;
  templateArray : any;
  record:any;
  tempArray  :any;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private modalService: NgbModal,
    private templateService: TemplateService
  ) { }

  ngOnInit() {
    // this.initializeTemplateArray();
    this.createForm();
    this.getData();
  }

  createForm() {
    this.mainForm = this.fb.group({
      _id:[''],
      category: [''],
      subCategory: [''],
      templateName: [''],
      template: ['']
    });
  }

  getData() {
    debugger
    this.templateService.getData().subscribe(response => {
      // this.templateArray=response[0];
      console.log(JSON.stringify(response));
      this.templateArray=response;
    }
  )
  }

  addModal(_domainOps) {
    this.modalRef = this.modalService.open(_domainOps);
  }

  initializeTemplateArray() {
    this.templateArray.push({
      id: '',
      category: '',
      subCategory: '',
      template: ''
    })
  }

  onEditClick(_index) {
    debugger
    const obj = this.templateArray[_index];
    this.mainForm.patchValue(obj);
    // this.addModal(domainOps)

  }

  onDeleteClick(_index?) {
    if (confirm('Are you sure you want to delete the record?')) {
      this.templateArray.splice(_index, 1);
    }

    //delete from db
    this.templateService.deleteRecord(_index).subscribe(response => {
      console.log(response);
          })
  }

  onSaveClick() {
    debugger
    const obj = this.mainForm.value;
    this.mainForm.reset();
    // let saveObj = Object.assign(this.templateArray);

    if (!obj._id) {
    // this.templateArray.push(obj);    
      this.templateService.postData(obj).subscribe(response => {
        console.log(response);
      })
    } else{
      debugger
      this.templateService.updateRecord(obj._id, obj).subscribe(response => {
        console.log(response);
        this.getData() 
      })
      //to do
    }
  }
}
