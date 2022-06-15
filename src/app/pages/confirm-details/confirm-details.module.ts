import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ConfirmDetailsPageRoutingModule } from './confirm-details-routing.module';

import { ConfirmDetailsPage } from './confirm-details.page';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MbscModule } from '@mobiscroll/angular';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfirmDetailsPageRoutingModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxDaterangepickerMd,
    MbscModule
  ],
  declarations: [ConfirmDetailsPage]
})
export class ConfirmDetailsPageModule {}
