import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../articles.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-view-article',
  standalone: false,
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css',
})
export class ViewArticleComponent {
  private route = inject(ActivatedRoute);
  private articlesSvc = inject(ArticlesService);
  private seo = inject(SeoService);

  private slug = this.route.snapshot.paramMap.get('slug') ?? '';

  // undefined = loading, null = not found, Article = loaded
  article = toSignal(this.articlesSvc.getBySlug(this.slug));
  notFound = computed(() => this.article() === null);

  constructor() {
    effect(() => {
      const a = this.article();
      if (a) this.seo.set(a.title + ' | Green Office Farms', a.description);
    });
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
