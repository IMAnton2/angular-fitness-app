import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.css"]
})
export class TrainingComponent implements OnInit {
  @ViewChild("test", { static: true }) test: ElementRef;
  ongoingTraining = false;
  constructor() {}

  ngOnInit() {}

  printText(text: string) {
    console.log(text, this.test);
  }
}
