import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-how-it-works',
  standalone: false,
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css',
})
export class HowItWorksComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set(
      'How Office Hydroponics Works | Green Office Farms',
      'From design consultation to installation and ongoing maintenance — learn how we set up a thriving indoor hydroponic farm in your Monroe County office.',
    );
  }
steps = [

    {
      number: '01',
      title: 'Consultation',
      description:
      'We meet with your team to understand your goals, available space, and workplace culture.'
    },

    {
      number: '02',
      title: 'Custom Design',
      description:
      'We design an indoor hydroponic system that complements your office while maximizing plant growth.'
    },

    {
      number: '03',
      title: 'Professional Installation',
      description:
      'Our team installs the complete hydroponic system with lighting, irrigation, and monitoring.'
    },

    {
      number: '04',
      title: 'Planting',
      description:
      'We plant fresh herbs and leafy greens selected specifically for your environment.'
    },

    {
      number: '05',
      title: 'Maintenance',
      description:
      'We visit regularly to clean the system, replace plants, balance nutrients, and keep everything thriving.'
    },

    {
      number: '06',
      title: 'Harvest & Enjoy',
      description:
      'Employees enjoy harvesting fresh produce while your workplace becomes healthier and more engaging.'
    }

  ];

}
