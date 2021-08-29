import { Injectable } from '@angular/core';
import { Days } from 'src/app/config/Days.enum';
import { ExerciseTypes } from 'src/app/config/ExerciseTypes.enum';
import { Workout, Routine } from 'src/app/config/Models';
import { ExampleRoutine } from 'src/app/stubs/routine';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private data: Routine[] = [ExampleRoutine];

  constructor() {}

  public getMyWorkouts(): Routine[] {
    return this.data;
  }
}
