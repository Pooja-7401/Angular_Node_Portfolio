import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserdataComponent } from './adduserdata/adduserdata.component';
import { ListuserdataComponen } from './listuserdata/listuserdata.component';


const routes: Routes = [{path:'adduser/:id',component:AdduserdataComponent},
{path:'listUser',component:ListuserdataComponen},
{path:'addNewUser',component:AdduserdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
