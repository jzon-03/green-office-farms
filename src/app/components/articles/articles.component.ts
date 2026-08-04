import { Component, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Article, ArticlesService } from '../../articles.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  private articlesSvc = inject(ArticlesService);
  private seo = inject(SeoService);

  articles = toSignal(this.articlesSvc.getAll(), { initialValue: [] as Article[] });

  ngOnInit(): void {
    this.seo.set(
      'Hydroponics Articles & Resources | Green Office Farms',
      'Read expert articles on office hydroponics, employee wellness gardens, and sustainable workplace food systems from Green Office Farms in Monroe County.',
    );
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
