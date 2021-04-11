import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

@Injectable({ providedIn: "root" })
export class TrainingService {
  private exercises: Exercise[] = [];
  exerciseChanged = new Subject<Exercise>();
  availbleExercises: Exercise[] = [
    { id: "crunches", name: "Crunches", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch Toes", duration: 180, calories: 15 },
    { id: "side-lunges", name: "Side Lunges", duration: 120, calories: 18 },
    { id: "burpees", name: "Burpees", duration: 60, calories: 8 }
  ];
  private selectedExercise: Exercise;

  getAvailbleExercises() {
    return this.availbleExercises.slice();
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
    this.exercises.push({
      ...this.selectedExercise,
      duration: this.selectedExercise.duration * (progress / 100),
      calories: this.selectedExercise.calories * (progress / 100),
      date: new Date(),
      state: "cancelled"
    });
    this.selectedExercise = null;
    this.exerciseChanged.next(null);
  }

  completedExercise() {
    this.exercises.push({
      ...this.selectedExercise,
      date: new Date(),
      state: "completed"
    });
    this.selectedExercise = null;
    this.exerciseChanged.next(null);
  }

  getPastExercises() {
    return this.exercises.slice();
  }
}
