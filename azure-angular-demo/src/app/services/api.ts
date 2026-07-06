import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  apiUrl = 'https://dummy-node-api-cfawbkg0b4daa3b0.eastasia-01.azurewebsites.net/api/hello';
  getMessage() {
    return this.http.get<{ message: string }>(this.apiUrl);
  }
}