import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthData } from 'src/app/models/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authData: AuthData;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authData = new AuthData();
  }

  login() {
    if (this.authData.email !== '' && this.authData.password !== '') {
      this.auth.login(this.authData).subscribe((user: User) => {
        this.auth.setUser(user);
        this.router.navigate(["/"]);
      }, err => {
        console.log(err);
      });
    } else {
      console.log("invaild auth data");
    }
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
