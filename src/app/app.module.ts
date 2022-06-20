import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client-crud/client-crud.component';

import { NavComponent } from './components/template/nav/nav.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ClientComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
