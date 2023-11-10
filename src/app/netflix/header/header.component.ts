import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  constructor(private rout:Router){}
  ngOnInit(): void {
   
  }
adminComp(){
  this.rout.navigate(['/listUser']);
}
}
