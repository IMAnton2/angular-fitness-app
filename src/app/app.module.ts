import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TrainingComponent } from "./training/training.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { sidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { NewTrainingComponent } from "./training/start-training/start-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { StopTraningComponent } from "./training/current-training/stop-training.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    StopTraningComponent,
    HeaderComponent,
    sidenavListComponent,
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    TrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopTraningComponent]
})
export class AppModule {}
