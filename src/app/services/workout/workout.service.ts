import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Days } from 'src/app/config/Days.enum';
import { ExerciseTypes } from 'src/app/config/ExerciseTypes.enum';
import { Workout, Routine } from 'src/app/config/Models';
import { ExampleRoutine } from 'src/app/stubs/routine';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private routines: Routine[] = [ExampleRoutine];

  constructor() {}

  public getMyRoutines(): Routine[] {
    return this.routines;
  }

  public getMyRoutine(): Routine{
    return ExampleRoutine;
  }

  public getRoutineById(uid: string): Observable<Routine> {
    return new Observable<Routine>((observer) => {
      const routine = this.routines.find(
        (r) => r.uid === uid
      );
      observer.next(routine);
    });
  }
}
