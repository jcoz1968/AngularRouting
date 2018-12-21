import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
