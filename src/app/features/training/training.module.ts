import { DeckService } from './../../core/services/deck.service';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TrainingComponent
  ],
  providers: []
})
export class TrainingModule { }
