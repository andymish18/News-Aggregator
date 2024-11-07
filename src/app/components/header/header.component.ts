import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>NEWS-AGGREGATOR</h1>
    <input type="text" placeholder="Search news..." (keyup.enter)="onSearch(searchTerm.value)" #searchTerm>
    <button (click)="onSearch(searchTerm.value)">Search</button>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>(); // Emit search term

  onSearch(term: string) {
    this.search.emit(term); // Emit the search term to the parent
  }
}
