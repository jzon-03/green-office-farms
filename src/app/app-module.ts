import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SafePipe } from './safe.pipe';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';

@NgModule({
  declarations: [
    App,
    BaseNavComponent,
    RootComponent,
    HomeComponent,
    SolutionsComponent,
    HowItWorksComponent,
    AboutComponent,
    ContactComponent,
    SafePipe,
    FunFactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
