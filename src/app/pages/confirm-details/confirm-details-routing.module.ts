import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmDetailsPage } from './confirm-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmDetailsPage
  },
  {
    path: 'date-time-modal',
    loadChildren: () => import('./date-time-modal/date-time-modal.module').then( m => m.DateTimeModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmDetailsPageRoutingModule {}
