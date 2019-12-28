import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import { Language } from 'src/app/models/language';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  constructor(
    private lang: LangService,
    private toast: ToastrService,
  ) { }

  langs: Language[];
  activeLang: string = environment.defaultLanguage;

  ngOnInit() {
    this.lang.getLanguages().then((langs: Language[]) => {
      this.langs = langs;
      console.log(this.langs);
    })
  }

  switchLanguage(lang: string): void {
    this.lang.setLanguage(lang);
    this.activeLang = lang;
    this.toast.success(this.lang.getText("Success"), this.lang.getText("lang switch"));
  }


}
