import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"]
})
export class CurrentTrainingComponent implements OnInit {
  @Output() stopTraining = new EventEmitter<void>();
  progress = 0;
  timer: any;
  roundProgress = 0;
  timerRunning = true;
  constructor() {}

  startTimer() {
    this.timer = setInterval(() => {
      this.progress += 0.125;
      this.roundProgress = Math.floor(this.progress);
      console.log(Math.floor(this.progress));
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 25);
  }

  ngOnInit() {
    this.startTimer();
  }

  stopTimer() {
    clearInterval(this.timer);
    this.stopTraining.emit();
  }
  pauseTimer() {
    this.timerRunning ? clearInterval(this.timer) : this.startTimer();
    this.timerRunning = !this.timerRunning;
  }
}
