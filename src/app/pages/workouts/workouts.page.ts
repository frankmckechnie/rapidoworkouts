import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from 'src/app/config/Workout';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})

export class WorkoutsPage implements OnInit {

  public workouts: Workout[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
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
