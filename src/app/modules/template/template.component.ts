import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Response } from '@angular/http/src/static_response';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util.service';
import { TemplateService } from 'src/app/services/template.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  subCategoryData: Object;
  // items: string[] = ["Noah", "Liam", "Mason", "Jacob"];
  items =[{name:"ravi",age:12},{name:"akshay",age:23},{name:"amol",age:42},{name:"karan",age:24},
  {name:"mayur",age:12},{name:"Harshwardhan",age:23},{name:"Ram",age:42},{name:"kiran",age:24},
  {name:"raj",age:12},{name:"aman",age:23},{name:"rohit",age:42},{name:"ihnn",age:24}
]
  // simplePeople: string[] = ["Noah", "Liam", "Mason", "Jacob"];
  modalRef: NgbModalRef;
  mainForm: FormGroup;
  templateArray: any;
  subCategoriesArray: any;
  categoryData: any;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _modalService: NgbModal,
    private _templateService: TemplateService,
    private _toaster: ToastrService,
    private _utilService: UtilService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getRecords();
    this.getDropdownData();
  }

  getDropdownData() {
    this._templateService.getCatData().subscribe(response => {
      this.categoryData = response;
      // this.categoryData.forEach(element => {
      //   if (this.subCategoriesArray && this.subCategoriesArray.length > 0)
      //     this.subCategoriesArray.push(element.subCategories);
      // });
    }, (err => {
      this._toaster.error('Error while getting categories');
    }))
  }

  onCategoryChange(_category) {
    const filter = { "category": _category }
    this._templateService.getCatData(JSON.stringify(filter)).subscribe(response => {
      this.subCategoriesArray = response[0].subCategories;
    }, (err => {
      this._toaster.error('Error while getting subcategories');
    }))
    this.mainForm.get('subCategory').reset();
  }

  createForm() {
    this.mainForm = this.fb.group({
      _id: [''],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      templateName: ['', Validators.required],
      template: ['', Validators.required]
    });
  }

  getRecords() {
    this._templateService.getData().subscribe(response => {
      this.templateArray = response;
    }, (err) => {
      this._toaster.error('Error while getting records');
    })
  }

  addTemplate(_domainOps) {
    this.modalRef = this._modalService.open(_domainOps);
    this.mainForm.reset();
    this.mainForm.get('category').enable();
    this.mainForm.get('subCategory').enable();
    this.subCategoriesArray = [];
  }

  editModal(_domainOps) {
    this.modalRef = this._modalService.open(_domainOps);
    // this.mainForm.reset();
  }

  onEditClick(_index) {
    const obj = this.templateArray[_index];
    this.onCategoryChange(obj.category);
    this.mainForm.patchValue(obj);
    this.mainForm.get('category').disable();
    this.mainForm.get('subCategory').disable();
  }

  onDeleteClick(_id) { //delete from DB
    if (confirm('Are you sure you want to delete this template?')) {
      this._templateService.deleteRecord(_id).subscribe(response => {
        this.getRecords()
      }, (err) => {
        this._toaster.error('Error while deleting template');
      })
    }
  }

  onSaveClick() {
    debugger
    if (!this.mainForm.valid) {
      this._toaster.error('Field should not be empty');
      return
    }
    const obj = this.mainForm.value;
    if (!obj._id) {
      this._templateService.postData(this._utilService.removeNull(obj)).subscribe(response => {
        this._toaster.success('Template saved succesfully');
        this.modalRef.close();
        this.getRecords();
      }, (err) => {
        this._toaster.error('Error while saving template');
      })
    } else {
      this._templateService.updateRecord(obj._id, this._utilService.removeNull(obj)).subscribe(response => {
        this._toaster.success('Template updated succesfully');
        this.modalRef.close();
        this.getRecords()
      }, (err) => {
        this._toaster.error('Error while saving template');
      })
    }
  }

  onsonTemplateChangeelect(_event){
    debugger
    console.log("Template:",this.mainForm);
  }
}
