import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

     constructor(private spinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerService.isLoading.next(true);

        return next.handle(req)
             .pipe(
                finalize(
                    () => {
                        this.spinnerService.isLoading.next(false);
                    }
                )
             );
    }
}