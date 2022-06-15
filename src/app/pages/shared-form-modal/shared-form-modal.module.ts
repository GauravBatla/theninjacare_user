import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedFormModalPageRoutingModule } from './shared-form-modal-routing.module';

import { SharedFormModalPage } from './shared-form-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedFormModalPageRoutingModule
  ],
  declarations: [SharedFormModalPage]
})
export class SharedFormModalPageModule {}
