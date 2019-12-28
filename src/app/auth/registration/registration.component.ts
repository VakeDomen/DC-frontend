import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { Invitation } from 'src/app/models/invitation';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang.service';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.newUser = new NewUser();
  }


  register() {
    if (this.newUser.checkData(this.password)) {
      this.auth.register(this.newUser).subscribe((inv: Invitation) => {
        this.toast.success(this.lang.getText("Success"), this.lang.getText("inv sent"));
        this.router.navigate(["/login"])
      }, err => {
        this.toast.error(this.lang.getText("Error"), err);
      })
    } else {
      this.toast.error(this.lang.getText("Error"), this.lang.getText("login invalid credentials"));
    }
  }


}
