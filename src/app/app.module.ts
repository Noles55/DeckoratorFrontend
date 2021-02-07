import { TrainingModule } from './features/training/training.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PredictionComponent } from './features/prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    TrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
