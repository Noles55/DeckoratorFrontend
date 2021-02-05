import { AppRoutingModule } from './../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from './services/deck.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
 imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    DeckService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
