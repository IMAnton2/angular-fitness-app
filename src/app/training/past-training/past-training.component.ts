import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-past-training",
  templateUrl: "./past-training.component.html",
  styleUrls: ["./past-training.component.css"]
})
export class PastTrainingComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ["date", "name", "duration", "calories", "state"];

  sub = new Subscription();

  dataSource = new MatTableDataSource<Exercise>();
  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.sub = this.trainingService.exerciseEnded.subscribe(() => {
      this.dataSource.data = this.trainingService.getPastExercises();
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
