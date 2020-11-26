import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { LoyaltyComponent } from "./loyalty/loyalty.component";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [AppComponent, LoginComponent, LoyaltyComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
