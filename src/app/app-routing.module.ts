import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import welcomeComponentCss from "./welcome/welcome.component.css";

const routes: Routes = [{ path: "", component: welcomeComponentCss }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
