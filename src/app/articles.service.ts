import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  category: string;
  featuredImage: string;
  published: string;
  readingMinutes: number;
  content: ContentBlock[];
}

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private cache$: Observable<Article[]>;

  constructor(private http: HttpClient) {
    this.cache$ = this.http.get<Article[]>('articles.json').pipe(shareReplay(1));
  }

  getAll(): Observable<Article[]> {
    return this.cache$;
  }

  getBySlug(slug: string): Observable<Article | null> {
    return this.cache$.pipe(map(articles => articles.find(a => a.slug === slug) ?? null));
  }
}
