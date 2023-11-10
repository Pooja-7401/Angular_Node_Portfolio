import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listuserdata',
  templateUrl: './listuserdata.component.html',
  styleUrls: ['./listuserdata.component.css']
})
export class ListuserdataComponen implements OnInit {
  filterdata: any;


  constructor(private router: Router, private services: ServiceService, private fb: FormBuilder) {
  }
  data: any = [];
  backupdata: any = [];
  public modeEditForm = false;
  public id: number | undefined;
  ngOnInit(): void {
    this.getData();
  }
  addData(){
    this.services.editing = false;
    this.router.navigate(['/addNewUser']);
  }
  getData(){
    this.services.fetchData().subscribe((res: any) => {
    console.log(res);
     this.data = res;
     this.backupdata = res;

    })
  }

  deleteData(id: string) {
    this.services.deletedata(id)
      .subscribe(res => {
        console.log(res);
        this.getData();
      })
  }


  patchData(value: any): void {
    this.services.editing = true;
    console.log(value);
    this.services.patching_data = value;
    this.id = value._id;
     this.router.navigate(['/adduser', this.id]);
  }


  search(event: any): void {
    console.log(event.target.value);
    const searchTerm = event.target.value.trim().toLowerCase();
    if (!searchTerm || searchTerm.length === 0) {
      this.data = this.backupdata;
    } else {
      this.filterdata = this.data.filter((res: any) => {
        // Add a null check for res.name to prevent errors
        return (res.name && res.name.includes(searchTerm)) ||
          res.price == searchTerm ||
          res.brand == searchTerm ||
          res.category == searchTerm;
      });
      this.data = this.filterdata;
    }
  }

}