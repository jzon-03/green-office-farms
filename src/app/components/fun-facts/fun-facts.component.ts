import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SeoService } from '../../seo.service';

interface Stat {
  target: number;
  suffix: string;
  label: string;
  icon: string;
  current: number;
}

@Component({
  selector: 'app-fun-facts',
  standalone: false,
  templateUrl: './fun-facts.component.html',
  styleUrl: './fun-facts.component.css',
})
export class FunFactsComponent implements OnInit, OnDestroy {
  @ViewChildren('statEl') statEls!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;
  private animated = false;

  stats: Stat[] = [
    { target: 95, suffix: '%', label: 'Less water than soil farming', icon: '💧', current: 0 },
    { target: 50, suffix: '%', label: 'Faster plant growth', icon: '🚀', current: 0 },
    { target: 0,  suffix: '',  label: 'Pesticides used — ever', icon: '🚫', current: 0 },
    { target: 365, suffix: '', label: 'Days a year of fresh produce', icon: '📅', current: 0 },
    { target: 90, suffix: '%', label: 'Less land required', icon: '🌍', current: 0 },
    { target: 0,  suffix: ' miles', label: 'Food miles — it grows on-site', icon: '📍', current: 0 },
  ];

  facts = [
    { icon: '🌿', heading: 'No Soil Needed', body: 'Hydroponic plants grow their roots directly in nutrient-rich water, skipping soil entirely — and thriving because of it.' },
    { icon: '☀️', heading: 'Sunlight Optional', body: 'Full-spectrum LED grow lights replicate sunlight so precisely that plants can\'t tell the difference — meaning your farm works on any floor.' },
    { icon: '🧪', heading: 'Precision Nutrition', body: 'Every nutrient is delivered in exact doses directly to the roots, eliminating waste and producing consistently tastier, more nutritious greens.' },
    { icon: '🌡️', heading: 'Climate-Proof', body: 'Indoor hydroponic systems are completely insulated from weather, drought, and seasonal change — harvest never gets cancelled.' },
    { icon: '🐛', heading: 'Pest-Free Zone', body: 'Without soil, most common pests simply have nowhere to live. No pesticides, no infestations, no surprises.' },
    { icon: '♻️', heading: 'Closed-Loop Water', body: 'Water that isn\'t absorbed by plants gets collected and recirculated, making hydroponics one of the most water-efficient food systems on earth.' },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set(
      'Fun Hydroponics Facts | Green Office Farms',
      'Discover surprising facts about hydroponics — 95% less water, zero pesticides, and fresh produce 365 days a year. Green Office Farms, Monroe County.',
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.runCountUp();
        }
      },
      { threshold: 0.2 },
    );
  }

  ngAfterViewInit(): void {
    // Observe the first stat element as a proxy for the whole grid
    const first = this.statEls.first;
    if (first) this.observer.observe(first.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private runCountUp(): void {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;

    this.stats.forEach(stat => {
      let step = 0;
      const increment = stat.target / steps;
      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.target);
        if (step >= steps) clearInterval(timer);
      }, interval);
    });
  }
}
