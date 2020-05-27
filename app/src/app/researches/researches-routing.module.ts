import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayResolver} from '../shared/resolvers/delay.resolver';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ResearchListComponent} from './component/research-list/research-list.component';
import {ResearchesComponent} from './component/researches/researches.component';

const routes: Routes = [
  {
    path: '',
    component: ResearchListComponent,
    data: {
      id: 'research'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: ResearchesComponent,
    data: {
      collection: 'research'
    },
    resolve: {
      meta: MetaResolver,
      delay: DelayResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchesRoutingModule {}
