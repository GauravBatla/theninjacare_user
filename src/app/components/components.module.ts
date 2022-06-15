import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [HomeHeaderComponent],
  declarations: [HomeHeaderComponent],
})
export class ComponentsModule {}
