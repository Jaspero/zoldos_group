import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {PhotoGalleryComponent} from './component/photo-gallery/photo-gallery.component';
import {PhotoGalleryRoutingModule} from './photo-gallery-routing.module';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [ScullyLibModule, PhotoGalleryRoutingModule, SharedModule]
})
export class PhotoGalleryModule {}
