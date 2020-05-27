import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';

import {ResearchesComponent} from './researches/researches.component';
import {ResearchListComponent} from './research-list/research-list.component';

@NgModule({
  declarations: [ResearchesComponent, ResearchListComponent],
  imports: [ScullyLibModule]
})
export class ResearchesModule {}
