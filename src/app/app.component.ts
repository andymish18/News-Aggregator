import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component'; // Import the NewsFeedComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NewsFeedComponent], // Include NewsFeedComponent here
  template: `
    <app-header (search)="newsFeedComponent.searchNews($event)"></app-header>
    <app-news-feed #newsFeedComponent></app-news-feed>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('newsFeedComponent') newsFeedComponent!: NewsFeedComponent;
  constructor() {}
}
