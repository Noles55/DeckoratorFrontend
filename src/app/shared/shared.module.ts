import { MatDividerModule } from '@angular/material/divider';
import { CardTypeListComponent } from './card-type-list/card-type-list.component';
import { DeckComponent } from './deck/deck.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule
  ],
  declarations: [
    DeckComponent,
    CardTypeListComponent
  ],
  exports: [
    DeckComponent
  ]
})
export class SharedModule { }
