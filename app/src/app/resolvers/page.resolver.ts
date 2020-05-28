import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BASE_TITLE } from '../consts/base-title.const';

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(BASE_TITLE)
    private baseTitle: string,
    private router: Router,
    private http: HttpClient
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const {
      collection,
      skipMeta
    } = route.data;
    const {
      id = route.data.id
    } = route.params;

    return this.getItem(
      id,
      collection
    )
      .pipe(
        map((page: any) => {
          if (!page) {
            this.router.navigate(['/404'])
          }

          if (!skipMeta) {
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
          }

          return page;
        })
      );
  }

  private getItem(
    id: string,
    collection?: string
  ) {
    console.log('url', `/collections${collection ? `/${collection}` : ''}/${id}.json`);
    return this.http
      .get( `/collections${collection ? `/${collection}` : ''}/${id}.json`)
  }
}
