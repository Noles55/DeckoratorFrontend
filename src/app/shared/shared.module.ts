import { HoverableCardComponent } from './hoverable-card/hoverable-card.component';
import { CardTypeListComponent } from './card-type-list/card-type-list.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'
import { DeckComponent } from './deck/deck.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule
  ],
  declarations: [
    DeckComponent,
    CardViewerComponent,
    CardTypeListComponent,
    HoverableCardComponent
  ],
  exports: [
    DeckComponent,
    CardViewerComponent,
    HoverableCardComponent
  ]
})
export class SharedModule { }
