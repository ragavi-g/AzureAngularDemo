import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private api = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);

  message = '';

  ngOnInit() {
    this.api.getMessage().subscribe({
      next: (response) => {
        console.log(response)
        this.message = response.message;
        console.log(this.message)
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
