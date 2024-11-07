import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <p>&copy; {{ currentYear }} My News Aggregator. All Rights Reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 1rem;
      background-color: #f1f1f1;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    p {
      margin: 0;
      color: #555;
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
