import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseNavComponent } from './components/base-nav/base-nav.component';

const routes: Routes = [
  {
    path: '', component: BaseNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
