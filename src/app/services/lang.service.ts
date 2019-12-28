import { Injectable } from '@angular/core';
import { Language } from '../models/language';
import { LanguageSet } from '../services/lang/lang-set';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  currentLang: Language; 
  languages: Language[];
  initiated: boolean;

  constructor() { }

  async initLanguages(): Promise<void> {
    this.languages = [];
    const langCodes: string[] = [...LanguageSet];
    for (const langCode of langCodes) {
      let lang = await import("../services/lang/" + langCode + ".ts")
      const language = new Language();
      language.icon = lang.icon;
      language.code = lang.code;
      language.translations = lang.translations;
      this.languages.push(language);
      this.initiated = true;
    }
  }

  getText(text: string): string {
    if (!this.currentLang) {
      this.currentLang = this.getLanguage(environment.defaultLanguage);
      if (!this.currentLang) {
        return null;
      }
    }
    
    return this.currentLang.translations[text];
  }

  async getLanguages(): Promise<Language[]> {
    if (!this.languages) {
      await this.initLanguages();
    }
    return this.languages;
  }

  setLanguage(code: string): void {
    this.currentLang = this.getLanguage(code);
  }

  getLanguage(code: string): Language {
    for (const lang of this.languages) {
      if (lang.code === code) {
        return lang;
      }
    }
    if (code === environment.defaultLanguage) {
      return null;
    } else {
      return this.getLanguage(environment.defaultLanguage);
    }
  }
}
