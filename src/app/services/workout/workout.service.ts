import { Injectable } from '@angular/core';
import { Workout } from 'src/app/config/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private data: Workout[] = [
    {
      uid: 'saddasd-asdasd-asd',
      name: 'Week 1'
    },
    {
      uid: 'saddasd-ascdcsdc-asd',
      name: 'Week 2'
    }
  ];

  constructor() {

  }

  public getWorkouts(): Workout[]{
    return this.data;
  }

}