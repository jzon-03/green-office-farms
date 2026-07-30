import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  values = [
    { icon: '♻️', title: 'Sustainability', desc: 'Every system we install reduces food miles, cuts water usage by up to 95%, and eliminates pesticides entirely.' },
    { icon: '🤝', title: 'Partnership', desc: 'We don\'t just install and leave. Our team provides ongoing care, harvests, and support for the life of your farm.' },
    { icon: '💡', title: 'Innovation', desc: 'We continuously refine our growing technology to maximise yield, minimise energy, and keep your farm beautiful.' },
    { icon: '🌍', title: 'Impact', desc: 'From carbon offsets to employee engagement scores, we measure the real-world difference our farms make.' },
  ];

  team = [
    { initials: 'JG', name: 'Jayson Guevarra', role: 'Founder & CEO', bio: 'Self-taught hydroponics farmer. Passionate about sustainable urban agriculture. Software Engineer by trade.' },
    
  ];
}
