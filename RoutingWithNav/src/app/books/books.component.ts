import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  public books = ['Developing with Angular', 'Mastering Node.js', 'Learning Android', 'Dataclysm', 'Deep Learning'];
}
