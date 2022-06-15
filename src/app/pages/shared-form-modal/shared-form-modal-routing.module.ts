import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedFormModalPage } from './shared-form-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SharedFormModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedFormModalPageRoutingModule {}
