import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2';  // Base API URL
  private apiKey = '038086172c474456816d52151c30f09b';  // Replace with your actual API key

  constructor(private http: HttpClient) {}

  // Fetch top headlines
  fetchTopHeadlines(params: any) {
    const url = `${this.apiUrl}/top-headlines?apiKey=${this.apiKey}`;
    return this.http.get(url);  // Return an Observable of top headlines
  }

  // Fetch articles based on a search term
  searchNews(searchTerm: string): Observable<any> {
    const url = `${this.apiUrl}/everything?q=${searchTerm}&apiKey=${this.apiKey}`;
    if (searchTerm) {
      this.apiUrl += `&q=${searchTerm}`;
    }
    return this.http.get(url);  // Return an Observable of search results
  }

  // Fetch an article by ID
  getArticles(id: string): Observable<any> {
    const url = `${this.apiUrl}/everything?articleId=${id}&apiKey=${this.apiKey}`;
    return this.http.get('https://newsapi.org/v2/top-headlines', { });  // Return an Observable of the article
  }
}
