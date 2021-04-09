import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "sidenav-list-app",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class sidenavListComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }
}
