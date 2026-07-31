import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set(
      'Contact Green Office Farms | Schedule a Hydroponics Consultation',
      'Schedule a free office hydroponics consultation in Monroe County. Fill out our form or email jguevarra@greenofficefarms.com.',
    );
  }
  email = 'jguevarra@greenofficefarms.com';
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeBI93qLjEOvU5iA2P_HPVWJr0pfKepxmRPekYgC3SudMQiLQ/viewform?embedded=true';
}
