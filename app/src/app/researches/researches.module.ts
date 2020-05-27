import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ResearchesComponent} from './component/researches/researches.component';
import {ResearchComponent} from './component/research/research.component';
import {ResearchesRoutingModule} from './researches-routing.module';

@NgModule({
  declarations: [ResearchesComponent, ResearchComponent],
  imports: [ScullyLibModule, ResearchesRoutingModule]
})
export class ResearchesModule {}
