import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../resolvers/page.resolver';
import {PublicationsComponent} from './component/publications/publications.component';
import {PublicationComponent} from './component/publication/publication.component';

var MetaResolver;
const routes: Routes = [
  {
    path: '',
    component: PublicationsComponent,
    data: {
      id: 'news'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: PublicationComponent,
    data: {
      collection: 'news'
    },
    resolve: {
      meta: MetaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule {}
