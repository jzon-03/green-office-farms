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
      image: 'images/employee welness.png'
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
      image: 'images/beautiful spaces.png'
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
      image: 'images/harvest fresh.png'
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
      image: 'images/smart technology.png'
    }

  ];
}
