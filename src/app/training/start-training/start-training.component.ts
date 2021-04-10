import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-new-training",
  templateUrl: "./start-training.component.html",
  styleUrls: ["./start-training.component.css"]
})
export class NewTrainingComponent implements OnInit {
  @Output() startTraining = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onStartTraining() {
    this.startTraining.emit();
  }
}
