import { Component } from '@angular/core';

@Component({
  selector: 'app-base-nav',
  standalone: false,
  templateUrl: './base-nav.component.html',
  styleUrl: './base-nav.component.css',
})
export class BaseNavComponent {
 menuOpen = false;


  toggleMenu(){

    this.menuOpen = !this.menuOpen;

  }
}
