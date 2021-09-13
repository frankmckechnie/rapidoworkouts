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

  public currentRoutine: Routine;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService,
    private actionSheetController: ActionSheetController,
  ) {}

  ngOnInit() {
    this.currentRoutine = this.workoutService.getMyRoutine();
    this.routines = this.workoutService.getMyRoutines();
  }

  /**
   * view the directory
   */
  public view(id: number) {
    this.router.navigate([`view/${id}`], { relativeTo: this.activatedRoute });
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
