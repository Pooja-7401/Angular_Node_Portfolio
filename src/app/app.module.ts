import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { NetflixModule } from './netflix/netflix.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    NetflixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
