import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeTab: string = 'home';
  @Output() tab = new EventEmitter<string>();

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  logout(): void {
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
