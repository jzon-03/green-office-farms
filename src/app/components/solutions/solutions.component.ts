import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set(
      'Hydroponic Solutions for Offices | Green Office Farms',
      'Explore modular hydroponic walls, countertop grow stations, and full indoor farm installations designed for Monroe County workplaces.',
    );
  }
solutions = [
    {
      icon: '🌱',
      title: 'Employee Wellness Gardens',
      description:
        'Create vibrant indoor hydroponic gardens where employees can enjoy fresh herbs and leafy greens throughout the year.',
      features: [
        'Fresh produce year-round',
        'Improves employee wellness',
        'Beautiful office feature',
        'Hands-off maintenance'
      ],
      image: 'assets/images/wellness.jpg'
    },

    {
      icon: '🌿',
      title: 'Corporate Green Walls',
      description:
        'Transform empty walls into living displays that create a healthier and more welcoming workplace.',
      features: [
        'Reception areas',
        'Conference rooms',
        'Office branding',
        'Natural air quality benefits'
      ],
      image: 'assets/images/greenwall.jpg'
    },

    {
      icon: '🥬',
      title: 'Break Room Farms',
      description:
        'Bring fresh vegetables and herbs directly into employee break rooms for an engaging wellness experience.',
      features: [
        'Harvest fresh greens',
        'Interactive experience',
        'Educational',
        'Sustainable'
      ],
      image: 'assets/images/breakroom.jpg'
    },

    {
      icon: '📊',
      title: 'Smart Monitoring',
      description:
        'Every system can be monitored using cloud-based technology with real-time environmental data.',
      features: [
        'Water Level',
        'Nutrient Monitoring',
        'Maintenance Alerts',
        'Harvest Tracking'
      ],
      image: 'assets/images/dashboard.jpg'
    }

  ];
}
