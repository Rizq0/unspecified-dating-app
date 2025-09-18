import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);

  baseUrl = 'https://localhost:5001/api/'; // hardcoded for simplicity, ideally from environment

  login(credentials: any) {
    this.http.post(this.baseUrl + 'account/login', credentials).subscribe({
      next: (response) => {
        console.log('Login successful', response);
      },
      error: (error) => {
        alert(error);
      }
    })
  }
}
