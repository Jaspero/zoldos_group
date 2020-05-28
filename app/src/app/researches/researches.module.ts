import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {ResearchComponent} from './component/research/research.component';
import {ResearchesComponent} from './component/researches/researches.component';
import {ResearchesRoutingModule} from './researches-routing.module';

@NgModule({
  declarations: [ResearchesComponent, ResearchComponent],
  imports: [
    SharedModule,
    ScullyLibModule,
    ResearchesRoutingModule
  ]
})
export class ResearchesModule {}
