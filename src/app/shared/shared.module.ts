import { CardTypeListComponent } from './card-type-list/card-type-list.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';
import { MatDividerModule } from '@angular/material/divider';
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
    CardViewerComponent,
    CardTypeListComponent
  ],
  exports: [
    DeckComponent,
    CardViewerComponent
  ]
})
export class SharedModule { }
