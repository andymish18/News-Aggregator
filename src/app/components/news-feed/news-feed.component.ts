import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  standalone: true, // This line marks it as a standalone component
  imports: [CommonModule],
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  articles: any[] = [];  // To hold fetched articles
  searchResults: any[] = []; // To hold search results
  isLoading: boolean = false; // To manage loading state
  errorMessage: string = ''; // To hold any error messages

  constructor(private newsService: NewsService) {}

  ngOnInit() {
     // Fetch initial top headlines
    const params = { country: 'us',
      category: 'general',
      q:''};
    this.fetchTopHeadlines(params);

  }

  // Function to fetch top headlines
  fetchTopHeadlines(params: { country: string; category: string; q: string; }) {
    console.log("viratkohli")
    this.isLoading = true; // Set loading to true while fetching
    this.newsService.fetchTopHeadlines(params).subscribe({
      next: (results: any) => {
        this.articles = results.articles; // Store fetched articles
        this.isLoading = false; // Stop loading
      },
      error: (error) => {
        console.error('Error fetching headlines:', error);
        this.isLoading = false; // Stop loading on error
      },
      complete: () => {
        if (this.articles.length > 0) {  // Correct comparison (checking length of array)
          console.log('Articles fetched successfully');
        } else {
          console.log('No articles found');
        }
      }
    });
  }

  // Function to handle search

  searchNews(searchTerm: string) {
    this.isLoading = true;  // Start the loading spinner
    console.log("taylorswift")
    this.newsService.searchNews(searchTerm).subscribe({
      next: (results: any) => {
        this.articles = results.articles;  // Store fetched articles
        this.isLoading = false;            // Stop loading
      },
      error: (error) => {
        this.errorMessage = 'Error fetching search results';  // Handle errors
        this.isLoading = false;           // Stop loading
      }
  });
}
}