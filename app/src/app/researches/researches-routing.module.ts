import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchesComponent} from './component/researches/researches.component';
import {PageResolver} from '../resolvers/page.resolver';
import {ResearchComponent} from './component/research/research.component';

var MetaResolver;
const routes: Routes = [
  {
    path: '',
    component: ResearchComponent,
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
      meta: MetaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchesRoutingModule {}
