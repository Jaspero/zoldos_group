import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../resolvers/page.resolver';
import {PublicationsComponent} from './component/publications/publications.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule {}
