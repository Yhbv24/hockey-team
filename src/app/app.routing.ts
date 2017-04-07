import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { IndivMemberComponent } from './indiv-member/indiv-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new-member',
    component: NewMemberComponent
  },
  {
    path: 'member-list',
    component: MemberListComponent
  },
  {
    path: 'member/:id',
    component: IndivMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
