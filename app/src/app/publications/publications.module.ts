import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PublicationsComponent} from './component/publications/publications.component';
import {PublicationsRoutingModule} from './publications-routing.module';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [PublicationsComponent],
  imports: [ScullyLibModule, PublicationsRoutingModule, SharedModule]
})
export class PublicationsModule {}
