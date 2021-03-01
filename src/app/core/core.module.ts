import { NotificationService } from './services/notification.service';
import { AppRoutingModule } from './../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from './services/deck.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
 imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
 declarations: [
    NavbarComponent
  ],
  providers: [
    DeckService,
    NotificationService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
