import { Component, Input, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-actions',
  templateUrl: './workout-actions.component.html',
  styleUrls: ['./workout-actions.component.scss'],
})
export class WorkoutActionsComponent implements OnInit {

  @Input() uid;

  constructor(
    public activatedRoute: ActivatedRoute,
    private popover: PopoverController,
    public router: Router) { }

  ngOnInit() {
  }

  /**
   * view the directory
   *
   **/
  public async gotTo(route: string) {
    await this.popover.dismiss();
    this.router.navigate([`${route}/${this.uid}`], { replaceUrl: false});
  }

}
