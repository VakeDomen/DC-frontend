import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LangService } from '../services/lang.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private router: Router,    
        private toast: ToastrService,
        private lang: LangService
    ) { }
    
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                this.router.navigate(["/login"]);
                this.toast.error(this.lang.getText("Error"), this.lang.getText("401"));
            } else if(err.status === 404) {
                this.toast.error(this.lang.getText("Error"), this.lang.getText("404"));
                return throwError(err.statusText);
            }
            
            const error = err.error.message || err.statusText;
            this.toast.error(this.lang.getText("Error"), error);
            return throwError(error);
        }))
    }
}