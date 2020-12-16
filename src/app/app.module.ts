import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { UpdateCoffreComponent } from './reveveur/coffre/update-coffre/update-coffre.component';
import { HistoriqueComponent } from './reveveur/historique/historique/historique.component';
import { DetailsComponent } from './reveveur/historique/details/details.component';
import { NotificationsComponent } from './dashboard/shared/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateCoffreComponent,
    HistoriqueComponent,
    DetailsComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
