import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageComponent } from './components/page/page.component';
import { PageResolver } from './resolvers/page.resolver';

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
          id: 'home',
        }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
