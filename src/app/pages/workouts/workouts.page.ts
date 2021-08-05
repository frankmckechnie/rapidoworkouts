import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/config/Workout';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  public workouts: Workout[];

  constructor(
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
   this.workouts =  this.workoutService.getWorkouts();
  }

}
