import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { Subscription } from "rxjs";
import { Exercise } from "./exercise.model";
import { TrainingService } from "./training.service";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.css"]
})
export class TrainingComponent implements OnInit, OnDestroy {
  @ViewChild("test", { static: true }) test: ElementRef;
  ongoingTraining = false;
  trainingSubscription: Subscription;
  currentTraining: Exercise;
  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainingSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        exercise
          ? (this.ongoingTraining = true)
          : (this.ongoingTraining = false);
      }
    );
  }

  ngOnDestroy() {
    this.trainingSubscription.unsubscribe();
  }
}
