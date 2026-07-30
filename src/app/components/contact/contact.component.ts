import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'jguevarra@greenofficefarms.com';
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeBI93qLjEOvU5iA2P_HPVWJr0pfKepxmRPekYgC3SudMQiLQ/viewform?embedded=true';
}
