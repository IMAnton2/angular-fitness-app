import { Component, OnInit } from "@angular/core";
// import { AngularFirestore } from "@angular/fire/firestore/firestore";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-new-training",
  templateUrl: "./start-training.component.html",
  styleUrls: ["./start-training.component.css"]
})
export class NewTrainingComponent implements OnInit {
  // @Output() startTraining = new EventEmitter<void>();
  exercises: Exercise[];

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.exercises = this.trainingService.getAvailbleExercises();
  }

  onStartTraining(selectedExerciseId) {
    // this.startTraining.emit();
    // console.log("onStartTraining", selectedExerciseId);
    this.trainingService.startExercise(selectedExerciseId);
  }
}
