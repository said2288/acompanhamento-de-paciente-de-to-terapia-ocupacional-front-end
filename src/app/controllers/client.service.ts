import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Client } from './../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  baseUrl = "http://localhost:8080/cliente"
    
  create(client: Client): Observable<any> { 
    return this.http.post<any>(this.baseUrl, client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
     map((obj) => obj),
     catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  edit(client: Client): Observable<any> {
    const url = `${this.baseUrl}/${client.id}`
    return this.http.put<any>(url, client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     )
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }
}

