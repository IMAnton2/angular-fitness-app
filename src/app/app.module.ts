import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppTableComponent } from "./app-table/app-table.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";

import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, MainNavComponent, AppTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
