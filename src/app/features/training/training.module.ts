import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSliderModule,
    MatButtonModule
  ],
  declarations: [
    TrainingComponent
  ],
  providers: []
})
export class TrainingModule { }
