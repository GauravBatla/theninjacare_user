import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendedListPageRoutingModule } from './recommended-list-routing.module';

import { RecommendedListPage } from './recommended-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendedListPageRoutingModule
  ],
  declarations: [RecommendedListPage]
})
export class RecommendedListPageModule {}
