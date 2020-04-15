import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthData } from 'src/app/models/auth-data';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authData: AuthData;

  constructor(
    private auth: AuthService,
    private router: Router,
    public lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.authData = new AuthData();
  }

  login() {
    if (this.authData.email !== '' && this.authData.password !== '') {
      this.auth.login(this.authData).subscribe((user: User) => {
        this.auth.setUser(user);
        this.router.navigate(["/"]);
        this.toast.success(this.lang.getText("Success"), this.lang.getText("login success") + user.name);
      }, err => {
        this.toast.error(this.lang.getText("Error"), this.lang.getText("login error"));
      });
    } else {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("login invalid credentials"));
    }
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
