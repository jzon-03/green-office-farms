import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticlesService } from '../../articles.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-view-article',
  standalone: false,
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css',
})
export class ViewArticleComponent implements OnInit {
  article: Article | undefined;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesSvc: ArticlesService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.articlesSvc.getBySlug(slug).subscribe(article => {
      if (!article) { this.notFound = true; return; }
      this.article = article;
      this.seo.set(article.title + ' | Green Office Farms', article.description);
    });
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
