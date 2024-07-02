import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private jsonUrl ='assets/form-structure.json';

  constructor( private http: HttpClient) { }

  getFormStructure(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
