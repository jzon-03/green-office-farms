import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set(
      'Green Office Farms | Office Hydroponics in Monroe County',
      'Green Office Farms designs, installs, and maintains indoor hydroponic farm systems for offices in Monroe County. Grow fresh food at work and boost employee wellness.',
    );
  }
}
