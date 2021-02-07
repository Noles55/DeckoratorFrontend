import { DeckComponent } from './deck/deck.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeckComponent
  ],
  exports: [
    DeckComponent
  ]
})
export class SharedModule { }
