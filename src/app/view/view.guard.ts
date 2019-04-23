import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ViewComponent} from './view.component';

@Injectable()
export class CanDeactivateView implements CanDeactivate<ViewComponent> {
  canDeactivate(
    component: ViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(component, currentRoute, currentState, nextState);

    return confirm('Do you want leave this page');
  }

}
