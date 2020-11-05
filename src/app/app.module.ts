import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
