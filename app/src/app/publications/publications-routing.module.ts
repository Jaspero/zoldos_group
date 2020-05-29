import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../resolvers/page.resolver';
import {PublicationsComponent} from './component/publications/publications.component';
import {PublicationComponent} from './component/publication/publication.component';
import {MetaResolver} from '../resolvers/meta.resolver';

const routes: Routes = [
  {
    path: '',
    component: PublicationsComponent,
    data: {
      id: 'publications',
      collection: 'pages'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: PublicationComponent,
    data: {
      collection: 'publications'
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
