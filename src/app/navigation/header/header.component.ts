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
  selector: "header-app",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}
  @Output() sidenavtoggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authState => {
      this.isAuth = authState;
    });
  }

  onToggleSidenav() {
    this.sidenavtoggle.emit();
  }
  onLogout() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
