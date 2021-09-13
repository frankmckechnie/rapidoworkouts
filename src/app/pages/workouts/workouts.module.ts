import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsPageRoutingModule } from './workouts-routing.module';

import { WorkoutsPage } from './workouts.page';
import { WorkoutActionsComponent } from 'src/app/components/workout-actions/workout-actions.component';
import { RoutineCardComponent } from 'src/app/components/routine-card/routine-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsPageRoutingModule
  ],
  declarations: [WorkoutsPage, WorkoutActionsComponent, RoutineCardComponent]
})
export class WorkoutsPageModule {}
