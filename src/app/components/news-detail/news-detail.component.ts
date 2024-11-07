import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="article" class="article-detail">
      <h1>{{ article.title }}</h1>
      <img [src]="article.urlToImage" alt="{{ article.title }}">
      <p>{{ article.content }}</p>
      <a [href]="article.url" target="_blank">Read original article</a>
    </div>
  `,
  styles: [`
    .article-detail {
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
    }
    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  `]
})
export class NewsDetailComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];  // Get article ID from the URL params
      this.newsService.getArticles(id).subscribe(
        (article) => {
          this.article = article;
        },
        (error) => {
          console.error('Error fetching article:', error);
        }
      );
    });
  }
}
