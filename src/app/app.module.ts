import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotesComponent } from './components/notes/notes.component';
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
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { PublicDashboardComponent } from './pages/public-dashboard/public-dashboard.component';
import { PrivateDashboardComponent } from './pages/private-dashboard/private-dashboard.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NewGroupComponent } from './components/new-group/new-group.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { GroupComponent } from './pages/group/group.component';
import { JoinGroupComponent } from './components/join-group/join-group.component';
import { FilterableNotesComponent } from './components/filterable-notes/filterable-notes.component';
import { NotePageComponent } from './pages/note/note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { LangComponent } from './components/lang/lang.component';
import { CommonModule } from '@angular/common';


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
    GroupsComponent,
    ProfileComponent,
    NewNoteComponent,
    NewGroupComponent,
    GroupComponent,
    JoinGroupComponent,
    FilterableNotesComponent,
    NotePageComponent,
    EditNoteComponent,
    LangComponent,
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
    NgxMaterialTimepickerModule.setLocale('de'),

    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ColorPickerModule
  ],
  exports: [
    MatDatepickerModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
