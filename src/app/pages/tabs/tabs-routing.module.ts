import { SharePageModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          },
          {
            path: 'select-service',
            loadChildren: () => import('../select-service/select-service.module').then( m => m.SelectServicePageModule)
          }
        ]
      },
      {
        path: 'my-booking',
        loadChildren: () => import('../my-booking/my-booking.module').then(m => m.MyBookingPageModule)
      },
      {
        path: 'share',
        loadChildren: () => import('../share/share.module').then(m => m.SharePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
