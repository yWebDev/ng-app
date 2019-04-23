import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CanDeactivateView } from './view/view.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view',
    loadChildren: 'lib/view/view.module#ViewModule',
    canDeactivate: [CanDeactivateView],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateView],
})
export class AppRoutingModule {
}
