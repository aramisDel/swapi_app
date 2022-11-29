import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable,tap, throwError } from 'rxjs';
import { Results } from './results';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  private url = 'https://swapi.py4e.com/api/people/';
  
  constructor(private http: HttpClient){  }

  public getCharactersPage(page: number): Observable<Results> {
    return  this.http.get<Results>(this.url+'?page='+page).pipe(
      tap(data => console.log('Character page: ', JSON.stringify(data))),
      catchError(this.handleError));
  }

   getUrlId(characterUrl: string): number{
    return parseInt(characterUrl.substring((this.url).length, characterUrl.length-1),10)
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';  
    if(err.error instanceof ErrorEvent){
        errorMessage = `'Error: ${err.status}, error message: ${err.message}`;
    }
    return throwError(()=>errorMessage);
}

}