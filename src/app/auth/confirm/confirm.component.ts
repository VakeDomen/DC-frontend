import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/models/auth-data'
import { User } from 'src/app/models/user';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  id: string;
  authData: AuthData;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    public lang: LangService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.authData = new AuthData();
    this.id = this.route.snapshot.paramMap.get("id");
  }


  login() {
    if (this.authData.email !== '' && this.authData.password !== '') {
      this.auth.confirmRegistration(this.id, this.authData).subscribe((user: User) => {
        this.auth.setUser(user);
        this.router.navigate(["/"]);
        this.toast.success(this.lang.getText("Success"), this.lang.getText("login success") + user.name);
      }, err => {
        this.toast.error(this.lang.getText("Error"), this.lang.getText("login error"));
      })
    } else {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("login invalid credentials"));
    }
  }

}
