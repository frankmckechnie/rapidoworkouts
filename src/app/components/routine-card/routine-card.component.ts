import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Routine, Workout } from 'src/app/config/Models';
import { WorkoutActionsComponent } from '../workout-actions/workout-actions.component';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss'],
})
export class RoutineCardComponent implements OnInit {

  @Input() routine: Routine;
  @Output() workoutClick = new EventEmitter<Workout>();

  public currentWeek: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.currentWeek = this.routine.weeks[0].name;
  }

  public onworkoutClick(workout: Workout) {
    this.workoutClick.emit(workout);
  }

  public async showWorkoutActions(ev: any, routine: Routine) {
    const popover = await this.popoverController.create({
      component: WorkoutActionsComponent,
      componentProps: routine,
      cssClass: 'my-custom-class',
      event: ev,
      showBackdrop: false,
      translucent: true
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
  }

}
