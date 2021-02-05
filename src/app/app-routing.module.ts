import { PredictionComponent } from './features/prediction/prediction.component';
import { TrainingComponent } from './features/training/training.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'training', component: TrainingComponent},
  { path: 'prediction', component: PredictionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
