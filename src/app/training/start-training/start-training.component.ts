import { Component, OnDestroy, OnInit } from "@angular/core";
// import { AngularFirestore } from "@angular/fire/firestore/firestore";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";
import { Subscription } from "rxjs";
import "rxjs/add/operator/map";

@Component({
  selector: "app-new-training",
  templateUrl: "./start-training.component.html",
  styleUrls: ["./start-training.component.css"]
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  // @Output() startTraining = new EventEmitter<void>();
  exerciseSubs: Subscription;
  exercises: Exercise[];

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailbleExercises();
    this.exerciseSubs = this.trainingService.exercisesChanged.subscribe(
      exercises => (this.exercises = exercises)
    );
    this.trainingService.getAvailbleExercises();
  }

  onStartTraining(selectedExerciseId) {
    // this.startTraining.emit();
    // console.log("onStartTraining", selectedExerciseId);
    this.trainingService.startExercise(selectedExerciseId);
  }

  ngOnDestroy() {
    this.exerciseSubs.unsubscribe();
  }
}
