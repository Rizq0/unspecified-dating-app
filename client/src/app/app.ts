import { Component, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('Dating App');
  protected members = signal<any>([]);

  ngOnInit() {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (data) => this.members.set(data),
      error: (error) => console.error(error),
      complete: () => console.log('Completed fetching members'),
    });
  }
}
