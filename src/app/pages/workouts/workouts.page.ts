import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout, Routine } from 'src/app/config/Models';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { WorkoutActionsComponent } from '../../components/workout-actions/workout-actions.component';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})

export class WorkoutsPage implements OnInit {

  public routines: Routine[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService,
    public actionSheetController: ActionSheetController,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.routines = this.workoutService.getMyWorkouts();
  }


  async showWorkoutActions(ev: any, routine: Routine) {
    const popover = await this.popoverController.create({
      component: WorkoutActionsComponent,
      componentProps: routine,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async showCreateOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Create a new workout',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'New',
          icon: 'add',
          handler: () => {
            this.router.navigate(['create'], { relativeTo: this.activatedRoute });
          },
        },
        {
          text: 'Browse',
          icon: 'search',
          handler: () => {
            this.router.navigate(['create'], { relativeTo: this.activatedRoute });
          },
        }
      ],
    });

    await actionSheet.present();
  }

}
