import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../types/user';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);

  baseUrl = 'https://localhost:5001/api/'; // hardcoded for simplicity, ideally from environment

  login(credentials: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', credentials).pipe(tap(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
      }
    } ));
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
