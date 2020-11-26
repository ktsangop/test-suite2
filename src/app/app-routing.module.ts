import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoyaltyComponent } from "./loyalty/loyalty.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "intro"
  },
  {
    path: "intro",
    component: LoginComponent
  },
  {
    path: "contact",
    component: LoyaltyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
