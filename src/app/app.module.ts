import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//datepicker
import {
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
} from '@angular/material';
import { PublicDashboardComponent } from './pages/public-dashboard/public-dashboard.component';
import { PrivateDashboardComponent } from './pages/private-dashboard/private-dashboard.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NotesComponent,
    NoteComponent,
    ConfirmComponent,
    NavbarComponent,
    DatepickerComponent,
    PublicDashboardComponent,
    PrivateDashboardComponent,
    MyProfileComponent,
    GroupsComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    //datepicker
    MatDatepickerModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatNativeDateModule,

  ],
  exports: [
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
