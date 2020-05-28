import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {map, take} from 'rxjs/operators';
import {BASE_TITLE} from '../consts/base-title.const';

@Injectable({
  providedIn: 'root'
})
export class MetaResolver implements Resolve<any> {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(BASE_TITLE)
    private baseTitle: string,
    private scully: ScullyRoutesService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const {collection} = route.data;
    const {id} = route.params;

    return this.scully.available$
      .pipe(
        take(1),
        map(routes => {
          const page: any = routes.find(rt => rt.route === `/${collection}/${id}`);

          if (!page) {
            this.router.navigate(['/404']);
            return false;
          }

          const valuesToSet = {...(page.meta || {})};
          this.title.setTitle(
            valuesToSet.title
              ? `${valuesToSet.title} | ${this.baseTitle}`
              : this.baseTitle
          );

          /**
           * To prevent iterating over the title and adding it as meta
           */
          delete valuesToSet.title;

          /**
           * Written like this instead of Object.entries to support older browsers
           */
          for (const name in valuesToSet) {
            if (valuesToSet.hasOwnProperty(name)) {
              this.meta.updateTag({name, content: valuesToSet[name]});
            }
          }

          return page;
        })
      );
  }
}
