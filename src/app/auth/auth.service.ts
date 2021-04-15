import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { TrainingService } from "../training/training.service";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthed = false;

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private trainingService: TrainingService
  ) {}

  initAuthListener() {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.isAuthed = true;
        this.authChange.next(true);
        this.router.navigate(["/training"]);
      } else {
        this.isAuthed = false;
        this.authChange.next(false);
        this.router.navigate(["/login"]);
        this.trainingService.cancelSubscription();
      }
    });
  }

  registerUser(authData: AuthData) {
    this.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log("result: ", result);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }

  login(authData: AuthData) {
    this.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log("result: ", result);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }

  logOut() {
    this.auth.signOut();
  }

  isauth() {
    return this.isAuthed;
  }
}
