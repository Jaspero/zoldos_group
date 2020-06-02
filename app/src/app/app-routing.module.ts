import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PageComponent} from './components/page/page.component';
import {PageResolver} from './resolvers/page.resolver';
import {ResearchesComponent} from './researches/component/researches/researches.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      settings: PageResolver
    },
    data: {
      id: 'settings',
      skipMeta: true
    },
    children: [
      {
        path: '',
        component: PageComponent,
        resolve: {
          page: PageResolver
        },
        data: {
          id: 'home'
        }
      },
      {
        path: 'researches',
        loadChildren: () =>
          import('./researches/researches.module').then(m => m.ResearchesModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'publications',
        loadChildren: () =>
          import('./publications/publications.module').then(
            m => m.PublicationsModule
          )
      },
      {
        path: 'lab-members',
        loadChildren: () =>
          import('./lab-members/lab-members.module').then(
            m => m.LabMembersModule
          )
      },
      {
        path: '404',
        component: PageNotFoundComponent
      },
      {
        path: ':id',
        component: PageComponent,
        resolve: {
          page: PageResolver
        },
        data: {
          collection: 'pages'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
