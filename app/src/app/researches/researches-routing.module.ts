import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetaResolver} from '../resolvers/meta.resolver';
import {PageResolver} from '../resolvers/page.resolver';
import {ResearchComponent} from './component/research/research.component';
import {ResearchesComponent} from './component/researches/researches.component';

const routes: Routes = [
  {
    path: '',
    component: ResearchesComponent,
    data: {
      id: 'researches',
      collection: 'pages'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: ResearchComponent,
    data: {
      collection: 'researches'
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
