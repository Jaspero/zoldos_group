import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetaResolver} from '../resolvers/meta.resolver';
import {PageResolver} from '../resolvers/page.resolver';
import {PhotoGalleryComponent} from './component/photo-gallery/photo-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent,
    data: {
      id: 'photo-gallery',
      collection: 'pages'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: PhotoGalleryComponent,
    data: {
      collection: 'photo-gallery'
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
export class PhotoGalleryRoutingModule {}
