import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../resolvers/page.resolver';
import {MetaResolver} from '../resolvers/meta.resolver';
import {NewsComponent} from './component/news/news.component';
import {NewsListComponent} from './component/news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    data: {
      id: 'news',
      collection: 'pages'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: NewsListComponent,
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
export class NewsRoutingModule {}
