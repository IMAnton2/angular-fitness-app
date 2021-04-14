import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({ providedIn: "root" })
export class TrainingService {
  private exercises: Exercise[] = [];
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  exerciseEnded = new Subject<void>();
  availbleExercises: Exercise[] = [];
  private selectedExercise: Exercise;

  constructor(private db: AngularFirestore) {}

  getAvailbleExercises() {
    this.db
      .collection("availableExercises")
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data().name,
            duration: doc.payload.doc.data().duration,
            calories: doc.payload.doc.data().calories
          };
        });
      })
      .subscribe((exercises: Exercise[]) => {
        this.availbleExercises = exercises;
        this.exercisesChanged.next([...this.availbleExercises]);
      });
  }

  startExercise(selectedId: string) {
    this.selectedExercise = this.availbleExercises.find(
      ex => ex.id == selectedId
    );
    this.exerciseChanged.next({ ...this.selectedExercise });
  }

  getSelectedExercise() {
    return { ...this.selectedExercise };
  }

  stopExercise(progress: number) {
    this.addDataToDatabase({
      ...this.selectedExercise,
      duration: this.selectedExercise.duration * (progress / 100),
      calories: this.selectedExercise.calories * (progress / 100),
      date: new Date(),
      state: "cancelled"
    });
    this.selectedExercise = null;
    this.exerciseChanged.next(null);
    this.exerciseEnded.next();
  }

  completedExercise() {
    this.addDataToDatabase({
      ...this.selectedExercise,
      date: new Date(),
      state: "completed"
    });
    this.selectedExercise = null;
    this.exerciseChanged.next(null);
    this.exerciseEnded.next();
  }

  getPastExercises() {
    return this.exercises.slice();
  }

  private addDataToDatabase(exercise: Exercise) {
    
  }
}
