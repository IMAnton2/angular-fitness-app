import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "header-app",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output() sidenavtoggle = new EventEmitter<void>();
  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavtoggle.emit();
  }
}
