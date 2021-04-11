import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TrainingService } from "../training.service";
import { StopTraningComponent } from "./stop-training.component";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"]
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;
  roundProgress = 0;
  timerRunning = true;
  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  startTimer() {
    const step =
      (this.trainingService.getSelectedExercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress += 1;
      this.roundProgress = Math.floor(this.progress);
      if (this.progress >= 100) {
        clearInterval(this.timer);
        this.trainingService.completedExercise();
      }
    }, step);
  }

  ngOnInit() {
    this.startTimer();
  }

  stopTimer() {
    this.timerRunning ? this.pauseTimer() : null;
    const dialogRef = this.dialog.open(StopTraningComponent, {
      data: {
        progress: this.roundProgress,
        exercise: this.trainingService.getSelectedExercise()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      result
        ? this.trainingService.stopExercise(this.progress)
        : this.pauseTimer();
    });
  }

  pauseTimer() {
    this.timerRunning ? clearInterval(this.timer) : this.startTimer();
    this.timerRunning = !this.timerRunning;
  }
}
