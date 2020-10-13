import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Module 
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
//Application Components
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';

//Application Services
import { BooksService } from './services/books.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    BooksService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
