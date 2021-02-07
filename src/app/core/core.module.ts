import { AppRoutingModule } from './../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from './services/deck.service';

@NgModule({
 imports: [
    CommonModule,
    AppRoutingModule
  ],
 declarations: [
    NavbarComponent
  ],
  providers: [
    DeckService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
