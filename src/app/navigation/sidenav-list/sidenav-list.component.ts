import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "sidenav-list-app",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class sidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private authService: AuthService) {}
  isAuth = false;
  authSubscription: Subscription;

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authState => {
      this.isAuth = authState;
    });
  }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logOut();
    this.sidenavToggle.emit();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
