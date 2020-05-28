import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PublicationsComponent} from './component/publications/publications.component';
import {PublicationComponent} from './component/publication/publication.component';
import {PublicationsRoutingModule} from './publications-routing.module';

@NgModule({
  declarations: [PublicationsComponent, PublicationComponent],
  imports: [ScullyLibModule, PublicationsRoutingModule]
})
export class PublicationsModule {}
