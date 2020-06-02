import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {LabMembersComponent} from './component/lab-members/lab-members.component';
import {LabMemberComponent} from './component/lab-member/lab-member.component';
import {LabMembersRoutingModule} from './lab-members-routing.module';

@NgModule({
  declarations: [LabMembersComponent, LabMemberComponent],
  imports: [ScullyLibModule, LabMembersRoutingModule, SharedModule]
})
export class LabMembersModule {}
