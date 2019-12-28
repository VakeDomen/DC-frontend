import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { Invitation } from 'src/app/models/invitation';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  newUser: NewUser;
  password: string;

  constructor(
    private auth: AuthService,
    public lang: LangService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newUser = new NewUser();
  }


  register() {
    if (this.newUser.checkData(this.password)) {
      this.auth.register(this.newUser).subscribe((inv: Invitation) => {
        console.log(inv);
        this.router.navigate(["/login"])
      }, err => {
        console.log(err);
      })
    } else {
      console.log("invalid registration data");
    }
  }


}
