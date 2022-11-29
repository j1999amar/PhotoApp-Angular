import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule, Routes } from '@angular/router';
const myRouter:Routes=[{
  path:"viewPhoto",
  component:ViewPhotoComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    ViewPhotoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
