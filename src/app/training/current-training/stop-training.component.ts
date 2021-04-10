import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-stop-training",
  templateUrl: "./stop-training.component.html"

  // template: `
  //   <h1 mat-dialog-title>Are you sure?</h1>
  //   <mat-dialog-content>
  //     <p>You already got {{ passedData.progress }}%</p>
  //   </mat-dialog-content>
  //   <mat-dialog-actions>
  //     <button mat-button [mat-dialog-close]="true">yes</button>
  //     <button mat-button [mat-dialog-close]="false">No</button>
  //   </mat-dialog-actions>
  // `
})
export class StopTraningComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData) {}
}
