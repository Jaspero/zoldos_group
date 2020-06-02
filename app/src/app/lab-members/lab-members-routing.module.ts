import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../resolvers/page.resolver';
import {MetaResolver} from '../resolvers/meta.resolver';
import {LabMembersComponent} from './component/lab-members/lab-members.component';
import {LabMemberComponent} from './component/lab-member/lab-member.component';

const routes: Routes = [
  {
    path: '',
    component: LabMembersComponent,
    data: {
      id: 'lab-members',
      collection: 'pages'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: LabMemberComponent,
    data: {
      collection: 'lab-members'
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
export class LabMembersRoutingModule {}
