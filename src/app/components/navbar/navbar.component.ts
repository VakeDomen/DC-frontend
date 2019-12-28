import { Component, EventEmitter,  OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeTab: string = 'home';
  @Output() tab = new EventEmitter<string>();

  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;



  constructor(
    private auth: AuthService,
    private router: Router,
    public lang: LangService,
  ) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }


  logout(): void {
    this.auth.logout();
    this.router.navigate(["/home"]);
  }
}
