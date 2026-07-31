import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';

const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'solutions', component: SolutionsComponent},
      {path: 'how-it-works', component: HowItWorksComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'fun-facts', component: FunFactsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
