import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: '**', redirectTo: '' }
];

