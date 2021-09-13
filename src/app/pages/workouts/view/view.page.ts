import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine, Workout } from 'src/app/config/Models';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public routine: Routine;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    const routineUid = params.get('routine-id');

    this.workoutService
        .getRoutineById(routineUid)
        .subscribe((routine) => {
          this.routine = routine;
        });
  }

  public onworkoutClick(workout: Workout) {
    console.log(workout);
  }

}
