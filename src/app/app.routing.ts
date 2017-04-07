import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberListComponent } from './member-list/member-list.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
