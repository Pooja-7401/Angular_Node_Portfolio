import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-adduserdata',
  templateUrl: './adduserdata.component.html',
  styleUrls: ['./adduserdata.component.css']
})
export class AdduserdataComponent implements OnInit {
  filterdata: any;
  data: any = [];
  submitted = false;
  backupdata: any = [];
  public modeEditForm = false;
  private id!: number;
  constructor(private translate: TranslateService, private services: ServiceService, private formBuilder: FormBuilder, private rout: Router) {
    translate.setDefaultLang('en');
    // Get the browser's language or use a default value ('en' in this case)
    const browserLang = navigator.language || 'en'!;
    // Use the browser's language if it matches 'en' or 'fr', otherwise use 'en'
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }
  changeLanguage(language: string) {
    this.translate.use(language);
  }
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
    });

    if (this.services.editing == true) {
      this.patchData();
    }

  }

  get f() { return this.registerForm.controls; }
postData() {
console.log("addd");
this.submitted=true;
if(this.registerForm.valid){

  this.modeEditForm = false;
   this.services.postData(this.registerForm.value).subscribe((data) => {
   console.log(data);
  this.registerForm.reset();
  this.rout.navigate(['/'])
      })
}else{
  return;
}
  }

  

  onReset() {
    console.log("reset");
    this.registerForm.reset();
    this.modeEditForm = false;

    this, this.rout.navigate(['/'])
  }
  deletedata(id: string) {
    this.services.deletedata(id)
      .subscribe(res => {
        console.log(res);
      })
  }


  patchData(): void {
    let data = this.services.patching_data;
    console.log(data);
      if (data) {
      this.modeEditForm = true;
      this.id = data._id;
      this.registerForm.patchValue({
        name: data.name,
        price: data.price,
        brand: data.brand,
        category: data.category,
      })

    }
 }
 editProduct(): void {
    console.log("edit");
    this.submitted=true;
    if (this.registerForm.valid) {

      console.log(this.id, this.registerForm.value);

      const updatedProductData = this.registerForm.value;

      this.services.updateData(updatedProductData, this.id).subscribe({
        next: (res) => {
          console.log('Update successful:', res);
          this.modeEditForm = false;
          this.onReset();
        },
        error: (err) => {
          console.error('Update error:', err);
          this.modeEditForm = false;
        }
      });
      this.rout.navigate(['/'])
      this.registerForm.reset()

    }
  }
}
